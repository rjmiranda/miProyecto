Ext.define('DVLOOP.controller.FormularioController', {
    extend: 'Ext.app.Controller',
    alias: 'formulariocontroller',
    itemId: 'formularioController',
    views: [
        'usuarios.formulario.FormView',
        'usuarios.formulario.FormView1'
    ],
    refs: [
        { ref: 'formView', selector: '#formView' },
        { ref: 'formView1', selector: '#formView1' },
        { ref: 'usuariosUserEditView', selector: '#usuariosUserEditView' },
        { ref: 'layouttableview', selector: '#layouttableview' }
    ],

    init: function () {
        this.control({


            'formview button[action=register]': {
                click: this.RegistrarUsuario
            }
        });

    },

    RegistrarUsuario: function (button) {
        debugger;
        var win = Ext.widget('formview1');
        var form = win.down('form');        
        var values = form.getValues();


    }

});
