﻿Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'DVLOOP',

    appFolder: 'app',
    controllers: ['UsersController','LayoutController','FormularioController'],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
          
            items: [
                {
                    xtype: 'homeview'
                }
            ],
        });
    }
});