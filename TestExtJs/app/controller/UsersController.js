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

        //Agrega los datos a la grilla

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
        var boton = view.down('button');
        boton.setText('Actualizar Usuario');
        boton.action = 'actualizarUsuario';

             
        var form = view.down('form');       
        form.loadRecord(record);        

    },
   
    Actualizarusuario: function (button, evento) {

        debugger;
        var botton = arguments[0];
        var win = botton.up('window');
        

        var grilla = Ext.ComponentQuery.query('#usuariosUserListView');
        var datosGrilla = grilla[0].store.data.items[0];
        console.log(datos);

        //que datos entran?
        //obtengo datos
        //a quien se lo quiero asignar los datos
        //???actualizar datos -> actualizar en la grilla los nuevos valores ?????
        //cerrar ventanita

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