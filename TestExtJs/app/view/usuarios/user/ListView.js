Ext.define('DVLOOP.view.usuarios.user.ListView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usuariosuserlist',
    itemId: 'usuariosUserListView',
    isTopLevel: true,
    layout: 'auto',
    title: 'vista: userlist',
    border: 1,
    tbar: [
       { text: 'Ingresar Usuario', action: 'nuevo' },
       { text: 'Eliminar Usuario', action: 'delete' }
    ],
    initComponent: function () {
        this.store = {
            fields: ['name',
                'email',
                'musica'
            ],
            data: [
                { name: 'Rafael', email: 'Rafaele@dvloop.com', musica: 'Rock' },
                { name: 'Alvaro', email: 'alvaro@dvloop.com', musica: 'Rock' },
                 { name: 'Pablo', email: 'pablo@dvloop.com', musica: 'Rock' },
                { name: 'Moisa', email: 'Moinsane@dvloop.com', musica: 'Merenge' }
            ]
        };

        this.columns = [
            { header: 'Name', dataIndex: 'name', flex: 1 },
            { header: 'Email', dataIndex: 'email', flex: 1 },
            { header: 'Musica', dataIndex: 'musica', flex: 1 },
            { xtype: 'checkcolumn', text: 'Active', dataIndex: 'active' },
                {
                    xtype: 'actioncolumn',
                    icon: 'cross.png',
                    width: 30,

                    handler: function (view, rowIndex, colIndex, item, e, record) {
                        console.log('estas eliminando desde ListView, con el xtype Actioncolumn');
                        record.store.remove(record);
                    }
                }
        ];
        this.callParent(arguments);
    }
});