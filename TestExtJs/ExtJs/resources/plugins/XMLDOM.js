Ext.define('Ext.ux.XMLDOM', {
	singleton: true,
	parseXML: function(data) {
		
		if (window.DOMParser) {
			
			return (new window.DOMParser()).parseFromString(data, 'text/xml');
			
		} else if (window.ActiveXObject&& new window.ActiveXObject('Microsoft.XMLDOM')) {
			
			var xmlDoc = new window.ActiveXObject('Microsoft.XMLDOM');
			xmlDoc.async = 'false';
			xmlDoc.loadXML(data);
			return xmlDoc;
			
		}
		
		throw new Error('No XML parser found');

	}
	
});