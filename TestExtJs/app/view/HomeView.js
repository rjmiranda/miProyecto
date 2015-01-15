Ext.define('DVLOOP.view.HomeView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.homeview',
    itemId: 'home',
    activeTab: 0,
    layout: 'auto',
    title: 'Inicio(homeview)',
    items: [
        {
            xtype: 'usuariosuserlist'
        },
        {
            xtype: 'layouttableview'
        }
    ]
});