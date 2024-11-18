var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_landslide_inventories_kec_ciawi_slope_10_1 = new ol.format.GeoJSON();
var features_landslide_inventories_kec_ciawi_slope_10_1 = format_landslide_inventories_kec_ciawi_slope_10_1.readFeatures(json_landslide_inventories_kec_ciawi_slope_10_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landslide_inventories_kec_ciawi_slope_10_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landslide_inventories_kec_ciawi_slope_10_1.addFeatures(features_landslide_inventories_kec_ciawi_slope_10_1);
var lyr_landslide_inventories_kec_ciawi_slope_10_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_landslide_inventories_kec_ciawi_slope_10_1, 
                style: style_landslide_inventories_kec_ciawi_slope_10_1,
                popuplayertitle: "landslide_inventories_kec_ciawi_slope_10",
                interactive: true,
                title: '<img src="styles/legend/landslide_inventories_kec_ciawi_slope_10_1.png" /> landslide_inventories_kec_ciawi_slope_10'
            });
var format_KECAMATAN_CIAWI_2 = new ol.format.GeoJSON();
var features_KECAMATAN_CIAWI_2 = format_KECAMATAN_CIAWI_2.readFeatures(json_KECAMATAN_CIAWI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATAN_CIAWI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATAN_CIAWI_2.addFeatures(features_KECAMATAN_CIAWI_2);
var lyr_KECAMATAN_CIAWI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECAMATAN_CIAWI_2, 
                style: style_KECAMATAN_CIAWI_2,
                popuplayertitle: "KECAMATAN_CIAWI",
                interactive: true,
                title: '<img src="styles/legend/KECAMATAN_CIAWI_2.png" /> KECAMATAN_CIAWI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_landslide_inventories_kec_ciawi_slope_10_1.setVisible(true);lyr_KECAMATAN_CIAWI_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_landslide_inventories_kec_ciawi_slope_10_1,lyr_KECAMATAN_CIAWI_2];
lyr_landslide_inventories_kec_ciawi_slope_10_1.set('fieldAliases', {'zone': 'zone', 'count': 'count', 'luas': 'luas', });
lyr_KECAMATAN_CIAWI_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_landslide_inventories_kec_ciawi_slope_10_1.set('fieldImages', {'zone': 'Range', 'count': 'Range', 'luas': 'TextEdit', });
lyr_KECAMATAN_CIAWI_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_landslide_inventories_kec_ciawi_slope_10_1.set('fieldLabels', {'zone': 'hidden field', 'count': 'hidden field', 'luas': 'inline label - always visible', });
lyr_KECAMATAN_CIAWI_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'no label', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'LUAS': 'hidden field', });
lyr_KECAMATAN_CIAWI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});