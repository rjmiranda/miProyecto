Ext.define('DVLOOP.view.usuarios.formulario.FormView1', {
    extend: 'Ext.window.Window',
    alias: 'widget.formview1',
    itemId: 'formView1',
    modal: true,
    resizable: false,
    title: 'this page dont a title',
    width: 250,
    bodyPadding: 1,
    layout: 'fit',
    autoShow: true,
    items: [
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
                },
            ]
        }
    ]
});


   
