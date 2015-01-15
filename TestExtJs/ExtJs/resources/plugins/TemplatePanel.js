Ext.define('Ext.ux.NTemplateContainer', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.templatepanel',
	tpl: null,
	listeners: {
		beforerender: function() {
			this.html = this.tpl.html;
		}
	},
	loadTemplate: function(data) {
		this.update(this.tpl.apply(data));
	}
});