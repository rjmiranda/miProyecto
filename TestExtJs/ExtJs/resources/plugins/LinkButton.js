Ext.define('Ext.ux.LinkButton', {
	extend: 'Ext.Component',
	alias: 'widget.linkbutton',
	baseCls: Ext.baseCSSPrefix + 'linkbutton',
	renderTpl: '<div id="{id}-btnWrap" style="margin: auto; class="{baseCls}-{ui}">' +
		'<a id="{id}-btnEl" href="{path}" <tpl if="tabIndex"> tabIndex="{tabIndex}"</tpl> role="link">' +
		'<tpl if="iconCls">' + '<span style="margin: auto; margin-right: 2px; width:16px; height:16px; float:left;" class="{iconCls}"></span>' + '</tpl>' +
		'<span style="line-height: 16px;" id="{id}-btnInnerEl" class="{baseCls}-{ui}-inner">' + '{text}' + '</span>' + '<span id="{id}-btnIconEl" class="{baseCls}-{ui}-icon"></span>' + '</a>' + '</div>',
	path: 'javascript:void(0)',
	title: null,
	defaultParams: {},
	stopEvent: true,
	initComponent: function () {

		var me = this;

		me.renderData = {
			text: me.text,
			path: me.path,
			iconCls: me.iconCls
		};

		me.addEvents('click');

		this.callParent(arguments);

	},
	afterRender: function () {

		this.callParent(arguments);

		var me = this,
			el = me.getEl();

		me.mon(el, 'click', me.handler, me, { stopEvent: me.stopEvent });

	},
	handler: function (e, el, eOpts) {
		var me = this;
		me.fireEvent('click', me, e, eOpts);
	}
});