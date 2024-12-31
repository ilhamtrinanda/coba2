ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11175330.809805, -53346.474865, 11177286.213383, -52159.195923]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_asas_1 = new ol.format.GeoJSON();
var features_asas_1 = format_asas_1.readFeatures(json_asas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_asas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_asas_1.addFeatures(features_asas_1);
var lyr_asas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_asas_1, 
                style: style_asas_1,
                popuplayertitle: 'asas',
                interactive: true,
                title: '<img src="styles/legend/asas_1.png" /> asas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_asas_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_asas_1];
lyr_asas_1.set('fieldAliases', {'id': 'id', });
lyr_asas_1.set('fieldImages', {'id': '', });
lyr_asas_1.set('fieldLabels', {'id': 'no label', });
lyr_asas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});