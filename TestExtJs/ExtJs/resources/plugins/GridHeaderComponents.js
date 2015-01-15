Ext.define('Ext.ux.GridHeaderComponents', {
	extend: 'Ext.AbstractPlugin',
	alias: 'plugin.gridheadercomponents',
	mixins: {
		observable: 'Ext.util.Observable'
	},
	constructor: function (config) {

		this.mixins.observable.constructor.call(this, config);

		this.addEvents('change');

	},
	init: function (grid) {

		this.grid = grid;

		grid.on('render', this.renderFields, this);
		grid.on('resize', this.resizeFields, this);
		grid.on('columnresize', this.resizeFields, this);

	},
	renderFields: function () {

		var grid = this.grid,
			cols = grid.columns,
			gridId = grid.id;

		for(var i = 0; i < cols.length; i++) {
			
			var col = cols[i];

			var componentDivId = gridId + "-componentscontainer-" + col.id;
			
			Ext.fly(col.id).appendChild({
				tag: 'div',
				id: componentDivId,
				style: {
					'margin': '2px'
				}
			});
			
			if (!col.hidden) {

				var components = col.components;

				var componentsLayout = col.componentsLayout || 'fit';

				if (components) {

					col.componentsContainer = Ext.create('Ext.container.Container', {
						layout: componentsLayout,
						items: components,
						renderTo: componentDivId
					});

				}

			}

		}

	},
	resizeFields: function () {

		var grid = this.grid;
		var cols = grid.columns;

		Ext.suspendLayouts();

		for(var i = 0; i < cols.length; i++) {

			var col = cols[i];

			if (!col.hidden && col.componentsContainer) {
				col.componentsContainer.setWidth(col.width - 5);
			}

		}

		Ext.resumeLayouts(true);

	}
	
});