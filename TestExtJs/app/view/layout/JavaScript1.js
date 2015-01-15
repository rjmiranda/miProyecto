Ext.define('DVLOOP.view.layout.JavaScript1', {
    extend: 'Ext.window.Window',
    alias: 'widget.javascript1',
    itemId: 'javaScript1',
    title: 'Ventan JavaScript1.js',
    autoShow:true,
    isTopLevel: true,
   // modal: true,
    bodyPadding: 5,
    layout: 'auto',
    items: {
        xtype: 'usuariosuserlist'
    }

});