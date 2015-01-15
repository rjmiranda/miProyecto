Ext.define('Ext.ux.GridComboKeyNav', {
	extend: 'Ext.util.KeyNav',

	constructor: function(el, config) {

		var me = this;
		me.picker = config.picker;
		me.owner = config.owner;
		me.callParent([el, Ext.apply({}, config, me.defaultHandlers)]);

	},

	defaultHandlers: {
		up: function() {
			var me = this,
				picker = me.picker,
				allItems = picker.store,
				oldItem = picker.highlightedItem,
				oldItemIdx = oldItem ? allItems.indexOf(oldItem) : -1,
				newItemIdx = oldItemIdx > 0 ? oldItemIdx - 1 : allItems.getCount() - 1; //wraps around
			me.owner.highlightAt(newItemIdx);
		},

		down: function() {

			var me = this,
				picker = me.picker,
				allItems = picker.store,
				oldItem = picker.highlightedItem,
				oldItemIdx = oldItem ? allItems.indexOf(oldItem) : -1,
				newItemIdx = oldItemIdx < allItems.getCount() - 1 ? oldItemIdx + 1 : 0; //wraps around
			me.owner.highlightAt(newItemIdx);
		},

		pageup: function() {
		},

		pagedown: function() {
		},

		home: function() {
			var me = this;
			me.owner.highlightAt(0);
		},

		end: function() {
			var me = this;
			me.owner.highlightAt(me.picker.store.getCount() - 1);
		},

		enter: function(e) {
			this.selectHighlighted(e);
		}
	},

	selectHighlighted: function(e) {
		var me = this,
			picker = me.picker,
			highlighted = picker.highlightedItem;
		if (highlighted) {
			me.picker.pickerField.select(highlighted, true, true);
		}
	}

});

Ext.define('Ext.ux.GridCombo', {
	extend: 'Ext.form.field.ComboBox',
	requires: ['Ext.grid.Panel', 'Ext.toolbar.Paging', 'Ext.ux.GridComboKeyNav'],
	alias: 'widget.gridcombo',
	matchFieldWidth: false,
	minChars: 1,
	createPicker: function() {

		var me = this;

		var picker,
			pickerCfg = Ext.apply({
				xtype: 'grid',
				pickerField: me,
				floating: true,
				selModel: {
					mode: me.multiSelect ? 'MULTI' : 'SINGLE'
				},
				hidden: true,
				store: me.store,
				displayField: me.displayField,
				focusOnToFront: false,
				pageSize: me.pageSize,
				width: 500,
				height: 300,
				border: 1,
				enableColumnHide: false,
				sortableColumns: false
			}, me.listConfig, me.defaultListConfig);

		var pagingToolbar = Ext.widget({
			xtype: 'pagingtoolbar',
			store: me.store
		});

		if(me.pageSize > 0 && me.queryMode == 'remote') {
			pickerCfg = Ext.apply(pickerCfg, {
				bbar: pagingToolbar
			});
		}

		picker = me.picker = Ext.widget(pickerCfg);

		if (me.pageSize) {
			pagingToolbar.on('beforechange', me.onPageChange, me);
		}

		me.mon(picker, {
			itemclick: me.onItemClick,
			refresh: me.onListRefresh,
			scope: me
		});

		me.mon(picker.getSelectionModel(), {
			beforeselect: me.onBeforeSelect,
			beforedeselect: me.onBeforeDeselect,
			selectionchange: function(list, selectedRecords) { me.inputEl.focus(1); me.onListSelectionChange(list, selectedRecords); },
			scope: me
		});

		return picker;
	},

	onItemClick: function(picker, record){

		var me = this,
			selection = me.picker.getSelectionModel().getSelection(),
			valueField = me.valueField;

		if (!me.multiSelect && selection.length) {
			if (record.get(valueField) === selection[0].get(valueField)) {
				me.displayTplData = [record.data];
				me.setRawValue(me.getDisplayValue());
				me.select(record, true, true);
				me.collapse();
			}
		}

	},

	select: function(r, assert, forceSelect) {

		var me = this,
			picker = me.picker,
			doSelect = true,
			fireSelect;

		if (r && r.isModel && assert === true && picker) {
			fireSelect = !picker.getSelectionModel().isSelected(r);
		}

		me.setValue(r, true);

		if (fireSelect || forceSelect) {
			me.fireEvent('select', me, r);
		}

	},

	getValue: function() {

		var me = this,
			picker = me.picker,
			rawValue = me.getRawValue(),
			value = me.value;

		if (me.getDisplayValue() !== rawValue && me.displayTpl.apply(me.displayTplData) !== rawValue && me.displayTplData) {
			value = rawValue;
			me.value = me.displayTplData = me.valueModels = null;
			if (picker) {
				me.ignoreSelection++;
				picker.getSelectionModel().deselectAll();
				me.ignoreSelection--;
			}
		}

		return value;
	},

	doAutoSelect: function() {

		var me = this,
			picker = me.picker,
			lastSelected;

		if (picker && me.autoSelect && me.store.getCount() > 0) {

			lastSelected = picker.store.indexOf(picker.getSelectionModel().lastSelected);

			me.highlightAt(lastSelected != -1 ? lastSelected : 0);

		}
	},

	highlightAt: function(index) {

		var picker = this.picker,
			item = picker.store.getAt(index);

		if (item) {
			picker.getSelectionModel().select(item, false, true);
			picker.getView().scrollRowIntoView(picker.getView().getNode(index), false);
			picker.highlightedItem = item;
		}

	},

	onExpand: function() {

		var me = this,
			keyNav = me.listKeyNav,
			selectOnTab = me.selectOnTab,
			picker = me.getPicker();

		if (keyNav) {
			keyNav.enable();
		} else {
			keyNav = me.listKeyNav = new Ext.ux.GridComboKeyNav(this.inputEl, {
				picker: picker,
				forceKeyDown: true,
				owner: me,
				tab: function(e) {
					if (selectOnTab) {
						this.selectHighlighted(e);
						me.triggerBlur();
					}
					return true;
				},
				enter: function(e){
					var selModel = picker.getSelectionModel(),
						count = selModel.getCount();

					this.selectHighlighted(e);

					if (!me.multiSelect && count === selModel.getCount()) {
						me.collapse();
					}
				}
			});
		}

		if (selectOnTab) {
			me.ignoreMonitorTab = true;
		}

		Ext.defer(keyNav.enable, 1, keyNav);

		me.inputEl.focus();

	}
});