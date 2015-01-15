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
                'musica',
                'active'
            ],
            data: [
                { name: 'Rafael', email: 'Rafaele@dvloop.com', musica: 'Rock', active: true },
                { name: 'Alvaro', email: 'alvaro@dvloop.com', musica: 'Rock', active: false },
                 { name: 'Pablo', email: 'pablo@dvloop.com', musica: 'Rock', active: true },
                { name: 'Moisa', email: 'Moinsane@dvloop.com', musica: 'Merenge', active: false }
            ]
        };

        this.columns = [
            { header: 'Name', dataIndex: 'name', flex: 1 },
            { header: 'Email', dataIndex: 'email', flex: 1 },
            { header: 'Musica', dataIndex: 'musica', flex: 1 },

            {
                xtype: 'checkcolumn',
                text: 'Active',
                dataIndex: 'active'
            },
            {
                xtype: 'actioncolumn', icon: 'cross.png', width: 30,
                handler: function (view, rowIndex, colIndex, item, e, record) {
                    // debugger;
                    record.store.remove(record);
                }
            }
        ];
        this.callParent(arguments);
    }
});