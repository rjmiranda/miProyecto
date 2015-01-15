Ext.define('Ext.ux.MonthField', {
	extend: 'Ext.form.field.Date',
	alias: 'widget.monthfield',
	requires: ['Ext.picker.Month'],
	alternateClassName: ['Ext.form.MonthField', 'Ext.form.Month'],
	selectMonth: null,
	initComponent: function() {

		var me = this;

		me.enableKeyEvents = true;

//		me.on({
//			keyup: function(obj, e) {
//
//				if(e.getKey() == Ext.EventObject.ESC) {
//					me.reset();
//				}
//				if(!me.editable && e.getKey() == Ext.EventObject.DELETE) {
//					me.reset();
//				}
//			}
//		});

		this.callParent(arguments);

	},
	createPicker: function () {

		var me = this, format = Ext.String.format;

		return Ext.create('Ext.picker.Month', {
			pickerField: me,
			ownerCt: me.ownerCt,
			renderTo: document.body,
			floating: true,
			hidden: true,
			focusOnShow: true,
			height: 235,
			minDate: me.minValue,
			maxDate: me.maxValue,
			disabledDatesRE: me.disabledDatesRE,
			disabledDatesText: me.disabledDatesText,
			disabledDays: me.disabledDays,
			disabledDaysText: me.disabledDaysText,
			format: me.format,
			showToday: me.showToday,
			startDay: me.startDay,
			minText: format(me.minText, me.formatDate(me.minValue)),
			maxText: format(me.maxText, me.formatDate(me.maxValue)),
			listeners: {
				select: { scope: me, fn: me.select },
				monthdblclick: { scope: me, fn: me.accept },
				yeardblclick: { scope: me, fn: me.accept },
				okclick: { scope: me, fn: me.accept },
				cancelclick: { scope: me, fn: me.cancel }
			},
			keyNavConfig: {
				esc: function () {
					me.collapse();
				}
			}
		});
	},
	cancel: function () {
		var me = this;
		me.selectMonth = null;
		me.collapse();
	},
	accept: function () {
		var me = this;
		if (me.selectMonth) {
			me.setValue(me.selectMonth);
			me.fireEvent('select', me, me.selectMonth);
		}
		me.collapse();
	},
	select: function (m, d) {
		var me = this;
		me.selectMonth = Ext.Date.parse((d[0] + 1) + '/1/' + d[1], 'n/j/Y');
	},
	setValue: function (value) {
		var me = this;
		if(!Ext.isDate(value)) {
			value = Ext.Date.parse(value, 'c', true);
		}
		if (value) {
			me.selectMonth = Ext.Date.parse((value.getMonth() + 1) + '/1/' + value.getFullYear(), 'n/j/Y');
		}
		me.callParent(arguments);
	},
	reset: function() {
		var me = this;
		me.selectMonth = null;
		this.callParent(arguments);
	},
	getValue: function () {
		var me = this;
		return me.selectMonth;
	}

});