Ext.define('DVLOOP.view.HomeView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.homeview',
    itemId: 'home',
    activeTab: 1,
    layout: 'auto',
    title: 'Inicio(homeview)',
    items: [
        {
            xtype: 'usuariosuserlist'
        },
        {
            xtype: 'layouttableview'
        },
        {
            xtype:'formview'
        }
    ]
});