Ext.define('DVLOOP.view.usuarios.user.EditView', {
    extend: 'Ext.window.Window',
    alias: 'widget.usuariosuseredit',
    itemId: 'usuariosUserEditView',
    modal:true,
    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'email',
                        fieldLabel: 'Email'
                    },
                    {
                        xtype: 'textfield',
                        name: 'musica',
                        fieldLabel: 'Musica'
                    }
                ]
            }
        ];

        this.buttons = [            
            {
                text: 'Agregar Usuario',
                action: 'agregarUsuario'
            },           
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});














