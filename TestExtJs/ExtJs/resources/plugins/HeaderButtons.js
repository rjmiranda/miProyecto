Ext.define('Ext.ux.HeaderButtons', {
	extend: 'Ext.AbstractPlugin',
	alias: 'plugin.headerbuttons',

	iconCls: '',
	index: undefined,

	headerButtons: [],

	init: function (panel) {
		this.panel = panel;
		this.callParent();
		panel.on('render', this.onAddIcons, this, { single: true });
	},

	onAddIcons: function () {
		
		if (this.panel.getHeader) {
			this.header = this.panel.getHeader();
		} else if (this.panel.getOwnerHeaderCt) {
			this.header = this.panel.getOwnerHeaderCt();
		}

		this.header.insert(this.index || this.header.items.length, this.headerButtons);
		
	}
	
});