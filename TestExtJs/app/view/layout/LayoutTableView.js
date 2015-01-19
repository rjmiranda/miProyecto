Ext.define('DVLOOP.view.layout.LayoutTableView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layouttableview',
    itemId: 'layoutTableView',
    title: 'this is an example of a table',
    isTopLevel: true,
    modal: true,
    autoScroll: true,
    bodyPadding: 5,
    layout: {
        type: 'table',
        columns: 3
    },
    defaults: {
        width: 635,
        height: 400
    },
    items: [
    {
        xtype: 'panel',
        bbar: [
          {
              text: 'Agregar Producto',
              action: 'addProduct'
          }
        ],
        items: [
            {
                xtype: 'grid',
                itemId: 'gridUno',
                border: 1,
                title: 'Esta Grilla Contiene Producto',

                store: {
                    fields: [
                        'articulo',
                        'marca',
                        'modelo',
                        'vidrio',
                        'aceroInox',
                        'porcelana',
                        'precio',
                        'activar'
                    ],
                    data: [
                        {
                            articulo: 'Plato',
                            marca: 'Tsuji',
                            modelo: true,
                            vidrio: 'NO',
                            aceroInox: 'NO',
                            porcelana: 'YES',
                            precio: 50,
                            activar: true
                        },
                        {
                            articulo: 'Vaso',
                            marca: 'Winsord',
                            modelo: false,
                            vidrio: 'YES',
                            aceroInox: 'NO',
                            porcelana: 'NO',
                            precio: 10,
                            activar: false
                        },
                        {
                            articulo: 'Detergente',
                            marca: 'Ariel',
                            modelo: false,
                            vidrio: 'NO',
                            aceroInox: 'NO',
                            porcelana: 'NO',
                            precio: 110,
                            activar: true
                        },
                        {
                            articulo: 'Cuchillo',
                            marca: 'Arbolito',
                            modelo: true,
                            vidrio: 'NO',
                            aceroInox: 'YES',
                            porcelana: 'NO',
                            precio: 550,
                            activar: false
                        },
                        {
                            articulo: 'Sarten Argentino',
                            marca: 'Pingocho',
                            modelo: true,
                            vidrio: 'NO',
                            aceroInox: 'SI',
                            porcelana: 'NO',
                            precio: 999,
                            activar: true
                        }
                    ]
                },
                columns: {
                    items: [
                        {
                            text: 'Articulo',
                            itemId: 'articulo',
                            dataIndex: 'articulo',
                            tooltip: 'Articulo',
                            flex: 1
                        },
                        {
                            text: 'Marca',
                            dataIndex: 'marca',
                            tooltip: 'Marca',
                            flex: 1
                        },
                        {
                            xtype: 'booleancolumn',
                            text: 'Modelo',
                            trueText: 'Nuevo',
                            falseText: 'Usado',
                            dataIndex: 'modelo'
                        },
                        {
                            text: 'Vidrio',
                            dataIndex: 'vidrio',
                            tooltip: 'Vidrio',
                            flex: 1
                        },
                        {
                            text: 'Acero Inox.',
                            dataIndex: 'aceroInox',
                            tooltip: 'Acero Inox.',
                            flex: 1
                        },
                        {
                            text: 'Porcelana',
                            dataIndex: 'porcelana',
                            tooltip: 'Porcelana',
                            flex: 1
                        },
                        {
                            text: 'Precio',
                            dataIndex: 'precio',
                            tooltip: 'Precio',
                            flex: 1
                        },
                        {
                            xtype: 'checkcolumn',
                            text: 'Activar',
                            dataIndex: 'activar'
                        }
                    ]
                },
                listeners: {
                    select: function (record, store) {
                        var article = store.data.articulo;
                        var textField = Ext.ComponentQuery.query('#textField');
                        var value = textField[0];
                        var field = value.setValue(article);
                        // AGREGAR LOS DATOS A OTRA GRILLA  //
                        var raw = store.data;
                        var grilla6 = Ext.ComponentQuery.query('#grilla6');
                        var values = grilla6[0];
                        var agregar = values.store.add(raw);
                                
                        var gridUno=Ext.ComponentQuery.query('#gridUno') 
                        var items = gridUno[0].store.data.items;
                        //for (var i = 0; i < items.length; i++) {
                        //    console.log(items[i].data.articulo);
                        //};
                        debugger;
                        items.forEach(function (article) { })
                        console.log(article)
                    }
                }
            },
            {
                xtype: 'button',
                text: 'boton',
                width: 100,
                action: 'ingresarProductos'
            },
            {
                xtype: 'panel',
                items: [
                    {
                        xtype: 'button',
                        text: 'Options',
                        handler: function () {
                        },
                        menu: new Ext.menu.Menu({
                            items: [
                                  // these will render as dropdown menu items when the arrow is clicked:
                               {
                                   text: 'Boton 1',
                                   handler: function () {
                                       alert("Soy el Boton 1");
                                   }
                               },
                               {
                                   text: 'Boton 2',
                                   handler: function () {
                                       // console.log('lleguee');
                                   }
                               }
                            ]
                        })
                    }
                ]
            },
            {
                xtype: 'panel',
                width: 635,
                height: 400,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'form',
                        title: 'Coming soon a calculator',
                        width: 317,
                        items: [
                            {
                                xtype: 'textfield',
                                itemId: 'nombreProducto',
                                name: 'nombreProducto',
                                fieldLabel: 'Nombre del Producto',
                                allowBlank: false,
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'cantidad',
                                name: 'cantidad',
                                fieldLabel: 'Cantidad',
                                allowBlank: false
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'operacion',
                                name: 'operacion',
                                fieldLabel: 'Operacion'
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'resultado',
                                name: 'resultado',
                                fieldLabel: 'Resultado'
                            },
                            {
                                xtype: 'button',
                                text: 'Calcular',
                                action: 'calcular',
                                width: 60,
                                heigth: 70
                            },
                            {
                                xtype: 'textfield',
                                itemId: 'detalle',
                                name: 'detalle',
                                fieldLabel: 'Detalle'
                            }
                        ]
                    },
                    {
                        xtype: 'form',
                        title: 'CALCULADORA',
                        flex: 1,
                        items: [
                            {
                                xtype: 'textfield',
                                style: {
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                },
                                width: 200,
                                height: 35
                            },
                            {
                                xtype: 'panel',
                                width: 300,
                                height: 200,
                                layout: {
                                    type: 'hbox',
                                },
                                style: {
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                },
                                items: [
                                    {
                                        xtype: 'button',
                                        text: '1',
                                        width: 60,
                                        heigth: 70,
                                        handler: function () {
                                            alert("1");
                                        }
                                    },
                                    {
                                        xtype: 'button',
                                        text: '2',
                                        width: 60,
                                        heigth: 70,
                                        handler: function () {
                                            alert("2");
                                        }
                                    },
                                    {
                                        xtype: 'button',
                                        text: '3',
                                        width: 60,
                                        heigth: 100,
                                        handler: function () {
                                            alert("3");
                                        }
                                    },
                                    {
                                        xtype: 'button',
                                        text: '4',
                                        width: 60,
                                        heigth: 70,
                                        handler: function () {
                                            alert("4");
                                        }
                                    },
                                    {
                                        xtype: 'button',
                                        text: '5',
                                        width: 60,
                                        heigth: 70,
                                        tooltip: 'cinco',
                                        handler: function () {
                                            alert("5");
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        xtype: 'panel',
        title: 'Accordion Layout',
        width: 635,
        height: 400,
        layout: {
            type: 'accordion',
            titleCollapse: true,
            animate: true,
            activeOnTop: true
        },
        items: [
            {
                xtype: 'panel',
                title: 'Traer Registros de la Grilla "Productos" ',
                items: {
                    xtype: 'textfield',
                    itemId: 'textField',
                    name: 'textfield',
                    fieldLabel: 'Registros de la grilla "Productos" ',
                    width: 600
                },
                //    xtype: 'templatepanel',
                //    itemid: 'articulostemplatepanel',
                //    height: 40,
                //    tpl: ext.create('ext.xtemplate', [
                //        '<table class="x-tpl-contenedor-tabla-propiedades">',
                //        '<tr>',
                //        '<th>total items: </th><td>{totalitems:articulo}</td>',
                //        '<th>total imputado: </th><td>{totalimputado:precio}</td>',
                //        '<th>saldo pendiente: </th><td>{saldopendiente:vidrio}</td>',
                //        '</tr>',
                //        '</table>'
                //    ])

                //  //  **************************
                //    var valor = articulo;


                //    articulosTemplatePanel.loadTeplate(
                //        totalItems: articulo,
                //    totalImputado: 0,
                //    saldoPendiente: 0

                //);

            },
            {
                title: 'Panel 2',
                html: 'Panel content!'
            },
            {
                title: 'Panel 3',
                html: 'Panel content!'
            },
            {
                title: 'Panel 4',
                html: 'Panel content!'
            },
            {
                title: 'Panel 5',
                html: 'Panel content!'
            }
        ]
    },
    {
        xtype: 'panel',
        title: 'Panel with ButtonGroup',
        width: 635,
        height: 400,
        bodyPadding: 5,
        html: 'HTML Panel Content',
        tbar: [{
            xtype: 'buttongroup',
            columns: 3,
            title: 'Clipboard',
            items: [{
                text: 'Paste',
                scale: 'large',
                rowspan: 3,
                iconCls: 'add',
                iconAlign: 'top',
                cls: 'btn-as-arrow'
            },
            {
                xtype: 'splitbutton',
                text: 'Menu Button',
                scale: 'large',
                rowspan: 3,
                iconCls: 'add',
                iconAlign: 'top',
                arrowAlign: 'bottom',
                menu: [
                    {
                        text: 'Menu Item 1'
                    }
                ]

            },
            {
                xtype: 'splitbutton',
                text: 'Cut',
                iconCls: 'add16',
                menu: [
                    {
                        text: 'Cut Menu Item'
                    }
                ]
            },
            {
                text: 'Copy', iconCls: 'add16'
            },
            {
                text: 'Format', iconCls: 'add16'
            }]
        }]
    },
    {
        xtype: 'container',
        layout: 'border',
        items: [
            {
                region: 'north',
                html: '<h1 class="x-panel-header">Esto es un Container</h1>',
                border: true,
                margins: '0 0 5 0'
            },
            {
                region: 'west',
                collapsible: true,
                title: 'Navigation',
                width: 150
                // could use a TreePanel or AccordionLayout for navigational items
            },
            {
                region: 'south',
                title: 'South Panel',
                collapsible: true,
                html: 'Information goes here',
                split: true,
                height: 100,
                minHeight: 100
            },
            {
                region: 'east',
                title: 'East Panel',
                collapsible: true,
                split: true,
                width: 150
            },
            {
                region: 'center',
                xtype: 'tabpanel', // TabPanel itself has no title
                activeTab: 0,      // First tab active by default
                items: {
                    title: 'Default Tab',
                    html: 'The first tab\'s content. Others may be added dynamically'
                }
            }
        ]
    },
    {
        xtype: 'panel',
        width: 635,
        height: 400,
        title: "VBoxLayout Panel",
        layout: {
            type: 'hbox',
            align: 'center'
        },
        items: [{
            xtype: 'panel',
            title: 'Inner Panel One',
            width: 250,
            flex: 2
        },
        {
            xtype: 'panel',
            title: 'Inner Panel Two',
            width: 250,
            flex: 4
        },
        {
            xtype: 'panel',
            title: 'Inner Panel Three',
            width: '50%',
            flex: 4
        }]
    },
    {
        xtype: 'panel',
        itemId: 'panel2',
        items: [
            {
                xtype: 'grid',
                title: 'Clientes',
                itemId: 'grilla6',
                border: 1,
                layout: 'auto',
                tbar: [
                  {
                      text: 'Clientes',
                      action: 'clientes'
                  }
                ],
                store: {
                    fields: [
                        'name',
                        'apellido',
                        'direccion',
                        'articulo',
                        'marca'

                    ],
                    data: [
                        { name: 'Juan', apellido: 'Perez', direccion: 'Calle Falsa 132' },
                        { name: 'Homero', apellido: 'Simpson', direccion: 'Siempre Vivas 321' },
                        { name: 'Bart J.', apellido: 'Simpson', direccion: 'Calle Falsa 321' },
                        { name: 'Lisa', apellido: 'Simpson', direccion: 'Calle C 50' },
                        { name: 'Marge', apellido: 'Simpson', direccion: 'Estados Unidos 10' },
                        { name: 'Abuelo', apellido: 'Simpson', direccion: 'Geriatrico' },
                        { name: 'Mongobery', apellido: 'Bers', direccion: 'Planta Nuclear 555' },
                        { name: 'Tom el Gato', apellido: 'Castrao', direccion: 'Desalojado' },
                        { name: 'Dally el Raton', apellido: 'Asessin', direccion: 'Muerto' },
                        { name: 'Milhause', apellido: 'No lo Se', direccion: 'Solo Cirujas 1291' }
                    ]
                },
                columns: {
                    items: [
                      { text: 'Nombre', dataIndex: 'name', flex: 1 },
                      { text: 'Apellido', dataIndex: 'apellido', flex: 1 },
                      { text: 'Direccion', dataIndex: 'direccion', flex: 1 },
                      { text: 'Articulo', dataIndex: 'articulo', flex: 1 }

                    ]
                }
            },
            {

            }
        ]
    }]
});
