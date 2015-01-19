Ext.define('DVLOOP.controller.LayoutController', {
    extend: 'Ext.app.Controller',
    alias: 'layoutcontroller',
    itemId: 'layoutController',
    views: [
        'layout.LayoutTableView'

    ],
    refs: [
        { ref: 'layoutTableView', selector: '#layoutTableView' },
        { ref: 'nombreProducto', selector: '#nombreProducto' },
        { ref: 'cantidad', selector: '#cantidad' },
        { ref: 'operacion', selector: '#operacion' },
        { ref: 'resultado', selector: '#resultado' },
        { ref: 'gridUno', selector: '#gridUno' },
        { ref: 'articulo', selector: '#articulo' },
        { ref: 'detalle', selector: '#detalle' },
       { ref: 'ingresarProducto', selector: '#ingresarProducto' }

    ],
    init: function () {
        this.control({

            'layouttableview button[action=calcular]': {
                click: this.calcular
            },
            'layouttableview button[action=ingresarProductos]': {
                click: this.IngresarProductos
            }
        });
    },
    calcular: function () {
        var nombreProducto = this.getNombreProducto();
        var cantidad = this.getCantidad();
        var resultado = this.getResultado();
        // var calcular = this.getCalcular(); no puedo hacer: 'desde aca, traeme a Cantidad', porque no lo ref.
        var articulo = this.getGridUno();
        var detalle = this.getDetalle();
        var items = articulo.store.data.items;
        for (var i = 0; i < items.length; i++) {
            console.log(items[i].data.articulo)
            if (items[i].data.articulo == nombreProducto.value) {
                var precio = items[i].data.precio;
                console.log(precio)
            }
        }
        var calcular = precio * cantidad.value;
        resultado.setValue(calcular);
        detalle.setValue('producto :' + nombreProducto.value + ' $ ' + precio);
    },

    IngresarProductos: function (button) {
        console.log('boton activado');
        var win = Ext.widget('layouttableview');
    }


});