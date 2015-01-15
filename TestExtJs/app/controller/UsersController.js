Ext.define('DVLOOP.controller.UsersController', {
    extend: 'Ext.app.Controller',
    alias: 'userscontroller',
    itemId: 'usersController',
    views: [
        'usuarios.user.ListView',
        'usuarios.user.EditView',
        'HomeView',
    ],
    refs: [
        { ref: 'usuariosUserListView', selector: '#usuariosUserListView' },
        { ref: 'usuariosUserEditView', selector: '#usuariosUserEditView' }
    ],

    init: function () {
        this.control({
            'usuariosuserlist button[action=nuevo]': {
                click: this.MostrarEditView
            },
            'usuariosuseredit button[action=agregarUsuario]': {
                click: this.AgregarUsuario
            },
            'homeview > usuariosuserlist': {
                itemdblclick: this.EditarUsuario
            },
            'usuariosuseredit button[action=actualizarUsuario]': {
                click: this.Actualizarusuario
            },
            'usuariosuserlist button[action=delete]': {
                click: this.EliminarUsuario
            }
        });
    },

    MostrarEditView: function () {
        //este metodo solo muestra la view p/ insertar usuario
        var view = Ext.widget('usuariosuseredit');
    },

    AgregarUsuario: function (button) {
        var win = button.up('window');
        form = win.down('form');
        values = form.getValues();
        var grid = Ext.ComponentQuery.query('#usuariosUserListView');
        var store = grid[0].store;
        store.add(values);
        win.close();

    },

    EditarUsuario: function (grid, record, html, index, event) {
        var view = Ext.widget('usuariosuseredit');
        //seteo el botn de la view con el comportamiento q necesito
        //arguments
        var boton = view.down('button');
        boton.setText('Actualizar Usuario');
        boton.action = 'actualizarUsuario';
        var form = view.down('form');
        form.loadRecord(record);

    },

    Actualizarusuario: function (button, evento) {
        var botton = arguments[0];
        var win = botton.up('window');
        var form = win.down('form');
        var record = form.getRecord();
        var values = form.getValues();
        record.set(values);
        win.close();
        //var grilla = Ext.ComponentQuery.query('#usuariosUserListView');
        //var items = grilla[0].store.data.items;
        //for (var i = 0; i < items.length; i++);
        //{ console.log(items[i].data) };

        //que datos entran?
        //obtengo datos
        //a quien se lo quiero asignar los datos
        //???actualizar datos -> actualizar en la grilla los nuevos valores ?????
        //cerrar ventanita
        // store.add(values);
    },

    EliminarUsuario: function (button) {
        var Grilla = button.up('grid');
        var Items = Grilla.store.data.items;
        ItemsSeleccionados = [];
        for (var i = 0; i < Items.length; i++) {
            if (Items[i].data.active == true) {
                console.log(Items[i].data);
                ItemsSeleccionados.push(Items[i]);
            }
        }
        Grilla.store.remove(ItemsSeleccionados);
    }

});