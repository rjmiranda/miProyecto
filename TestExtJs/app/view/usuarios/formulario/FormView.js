Ext.define('DVLOOP.view.usuarios.formulario.FormView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formview',
    itemId: 'formView',
    frame: true,
    title: 'this is an example of a Form',
    bodyPadding: 10,
    autoScroll: true,
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },
    initComponent: function () {
        this.items = [
            {
                xtype: 'fieldset',
                title: 'User Info',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    { allowBlank: false, fieldLabel: 'User ID', name: 'user', emptyText: 'user id' },
                    { allowBlank: false, fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' },
                    { allowBlank: false, fieldLabel: 'Verify', name: 'pass', emptyText: 'password', inputType: 'password' }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'Contact Information',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        fieldLabel: 'First Name',
                        emptyText: 'First Name',
                        name: 'first'
                    },
                    {
                        fieldLabel: 'Last Name',
                        emptyText: 'Last Name',
                        name: 'last'
                    },
                    {
                        fieldLabel: 'Company',
                        name: 'company'
                    },
                    {
                        fieldLabel: 'Email',
                        name: 'email',
                        vtype: 'email'
                    },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Date of Birth',
                        name: 'dob',
                        allowBlank: false,
                        maxValue: new Date()
                    }]
            }];

        this.buttons = [
          {
              text: 'Register',
              action: 'register',
              disabled: false,
              formBind: false
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
