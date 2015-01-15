Ext.define('Ext.ux.CustomRowEditing', {
	extend: 'Ext.grid.plugin.CellEditing',
	alias: 'plugin.customrowediting',

	rowEditingModel: null,

	init: function (grid) {

		this.callParent(arguments);

		this.grid = grid;

		grid.allowBlank = grid.allowBlank === 'undefined' ? true : grid.allowBlank;
		grid.validateRecords = grid.validateRecords === 'undefined' ? false : grid.validateRecords;

		var me = this;

		grid.store.on('update', function(store, record) {
			if(record == me.rowEditingModel) {
				me.rowEditingModel = null;
			}
		});
		grid.store.on('clear', function() {
			me.rowEditingModel = null;
			me.addEmptyRow();
		});

		grid.getModelData = function() {

			var modelData = { };

			modelData[this.name || 'data'] = Ext.Array.map(
				Ext.Array.filter(
					me.grid.store.data.items,
					function(x) { return x != me.rowEditingModel; }
				),
				function (y) { return y.data; }
			);

			return modelData;

		};

		grid.on('afterrender', function() {
			me.addEmptyRow();
		});

		grid.view.on('itemupdate', function(record) {

			var shouldAddEmptyRow = false;

			for(var prop in record.data) {
				if(!Ext.isEmpty(record.data[prop]))	{
					shouldAddEmptyRow = true;
					break;
				}
			}

			if(shouldAddEmptyRow) {
				me.addEmptyRow();
			}

		});

		grid.view.on('itemremove', function(record) {
			if(me.rowEditingModel == record) {
				me.rowEditingModel = null;
			}
			me.addEmptyRow();
		});

		grid.validate = function() { return me.validate.apply(me, arguments); }

	},

	addEmptyRow: function() {

		Ext.defer(function() {
			if (!this.rowEditingModel || this.grid.store.getCount() == 0) {
				this.rowEditingModel = this.grid.store.add({})[0];
			}
		}, 5, this);

	},

	validate: function (validationRecord) {

		var result = true,
			grid = this.grid,
			firstPass = true,
			me = this;

		var row;

		if(grid.fireEvent('beforevalidation', grid) === false) return true;

		if (!grid.allowBlank && grid.store.getCount() == 1 && grid.store.getAt(0) == this.rowEditingModel) {

			row = Ext.fly(grid.view.getNode(grid.store.getAt(0)));
			row.dom.setAttribute('data-errorqtip', 'Debe agregar al menos una imputacion');
			row.addCls('x-grid-row-invalid');

			return false;

		} else {

			row = grid.view.el.down('x-grid-row-invalid');

			if(row)  {
				row.dom.removeAttribute('data-errorqtip');
				row.removeCls('x-grid-row-invalid');
			}

		}

		if(!me.grid.validateRecords) return true;

		var recordsToValidate = validationRecord ? Ext.Array.from(validationRecord) : grid.store.data.items;

		for(var recordIndex = 0; recordIndex < recordsToValidate.length; recordIndex++) {

			var record = recordsToValidate[recordIndex];

			var validationResult = record.validate();

			if (record != me.rowEditingModel && !validationResult.isValid()) {

				for(var validationResultIndex = 0; validationResultIndex < validationResult.items.length; validationResultIndex++) {

					var error = validationResult.items[validationResultIndex];

					var column;

					for(var i = 0; i < grid.columns.length; i++) {
						if(grid.columns[i].dataIndex == error.field) {
							column = grid.columns[i];
						} else {
							if(firstPass) {
								me.clearCellInvalid(grid.columns[i], record);
							}
						}
					}

					if(column) {
						me.markCellInvalid(column, record, error.message);
					}

					firstPass = false;

				}

				result = false;

			} else {

				for(var i = 0; i < grid.columns.length; i++) {
					me.clearCellInvalid(grid.columns[i], record);
				}

			}

		}

		return result;

	},
	clearCellInvalid: function (column, record) {

		var cell = this.grid.view.getCell(record, column);

		cell.removeCls('x-grid-cell-invalid');

		cell.dom.removeAttribute('data-errorqtip');

	},
	markCellInvalid: function(column, record, error) {

		var cell = this.grid.view.getCell(record, column);

		cell.addCls('x-grid-cell-invalid');

		cell.dom.setAttribute('data-errorqtip', error);

	},
	onEditComplete : function(ed, value, startValue) {

		this.callParent(arguments);

		if(this.context.grid.validate) {
			this.context.grid.validate(this.context.record);
		}

	}

});