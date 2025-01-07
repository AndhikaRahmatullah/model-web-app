var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMap_1 = new ol.layer.Tile({
            'title': 'Google Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var lyr_PostEventNDVI_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Post Event NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PostEventNDVI_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11892520.000000, -755007.099280, 11905990.000000, -740216.065361]
                            })
                        });
var lyr_PreEventNDVI_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Pre Event NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PreEventNDVI_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11892520.000000, -755007.099280, 11905990.000000, -740216.065361]
                            })
                        });
var lyr_rdNDVI_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "rdNDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/rdNDVI_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11892520.000000, -755007.099280, 11905990.000000, -740216.065361]
                            })
                        });
var format_KemiringanLereng_5 = new ol.format.GeoJSON();
var features_KemiringanLereng_5 = format_KemiringanLereng_5.readFeatures(json_KemiringanLereng_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KemiringanLereng_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KemiringanLereng_5.addFeatures(features_KemiringanLereng_5);
var lyr_KemiringanLereng_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KemiringanLereng_5, 
                style: style_KemiringanLereng_5,
                popuplayertitle: "Kemiringan Lereng",
                interactive: true,
    title: 'Kemiringan Lereng<br />\
    <img src="styles/legend/KemiringanLereng_5_0.png" /> 0-8%<br />\
    <img src="styles/legend/KemiringanLereng_5_1.png" /> 8-15%<br />\
    <img src="styles/legend/KemiringanLereng_5_2.png" /> 15-25%<br />\
    <img src="styles/legend/KemiringanLereng_5_3.png" /> 25-40%<br />\
    <img src="styles/legend/KemiringanLereng_5_4.png" /> >40%<br />\
    <img src="styles/legend/KemiringanLereng_5_5.png" /> <br />'
        });
var format_AreaPotensiLongsor_6 = new ol.format.GeoJSON();
var features_AreaPotensiLongsor_6 = format_AreaPotensiLongsor_6.readFeatures(json_AreaPotensiLongsor_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaPotensiLongsor_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaPotensiLongsor_6.addFeatures(features_AreaPotensiLongsor_6);
var lyr_AreaPotensiLongsor_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaPotensiLongsor_6, 
                style: style_AreaPotensiLongsor_6,
                popuplayertitle: "Area Potensi Longsor",
                interactive: true,
                title: '<img src="styles/legend/AreaPotensiLongsor_6.png" /> Area Potensi Longsor'
            });
var format_TitikLongsor_7 = new ol.format.GeoJSON();
var features_TitikLongsor_7 = format_TitikLongsor_7.readFeatures(json_TitikLongsor_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikLongsor_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikLongsor_7.addFeatures(features_TitikLongsor_7);
var lyr_TitikLongsor_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikLongsor_7, 
                style: style_TitikLongsor_7,
                popuplayertitle: "Titik Longsor",
                interactive: true,
                title: '<img src="styles/legend/TitikLongsor_7.png" /> Titik Longsor'
            });
var format_KecamatanCiawi_8 = new ol.format.GeoJSON();
var features_KecamatanCiawi_8 = format_KecamatanCiawi_8.readFeatures(json_KecamatanCiawi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanCiawi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanCiawi_8.addFeatures(features_KecamatanCiawi_8);
var lyr_KecamatanCiawi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanCiawi_8, 
                style: style_KecamatanCiawi_8,
                popuplayertitle: "Kecamatan Ciawi",
                interactive: true,
                title: '<img src="styles/legend/KecamatanCiawi_8.png" /> Kecamatan Ciawi'
            });
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleMap_1,],
                                fold: "open",
                                title: "Base Maps"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMap_1.setVisible(true);lyr_PostEventNDVI_2.setVisible(true);lyr_PreEventNDVI_3.setVisible(true);lyr_rdNDVI_4.setVisible(true);lyr_KemiringanLereng_5.setVisible(true);lyr_AreaPotensiLongsor_6.setVisible(true);lyr_TitikLongsor_7.setVisible(true);lyr_KecamatanCiawi_8.setVisible(true);
var layersList = [group_BaseMaps,lyr_PostEventNDVI_2,lyr_PreEventNDVI_3,lyr_rdNDVI_4,lyr_KemiringanLereng_5,lyr_AreaPotensiLongsor_6,lyr_TitikLongsor_7,lyr_KecamatanCiawi_8];
lyr_KemiringanLereng_5.set('fieldAliases', {'slope_clas': 'slope_clas', 'slope_perc': 'slope_perc', 'slope_desc': 'slope_desc', 'luas': 'luas', });
lyr_AreaPotensiLongsor_6.set('fieldAliases', {'zone': 'zone', 'count': 'count', 'luas': 'luas', });
lyr_TitikLongsor_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'foto': 'foto', });
lyr_KecamatanCiawi_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'Desa': 'Desa', });
lyr_KemiringanLereng_5.set('fieldImages', {'slope_clas': 'Range', 'slope_perc': 'TextEdit', 'slope_desc': 'TextEdit', 'luas': 'TextEdit', });
lyr_AreaPotensiLongsor_6.set('fieldImages', {'zone': 'Range', 'count': 'Range', 'luas': 'TextEdit', });
lyr_TitikLongsor_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'foto': 'ExternalResource', });
lyr_KecamatanCiawi_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'Desa': 'TextEdit', });
lyr_KemiringanLereng_5.set('fieldLabels', {'slope_clas': 'no label', 'slope_perc': 'no label', 'slope_desc': 'no label', 'luas': 'no label', });
lyr_AreaPotensiLongsor_6.set('fieldLabels', {'zone': 'hidden field', 'count': 'hidden field', 'luas': 'inline label - always visible', });
lyr_TitikLongsor_7.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'foto': 'inline label - always visible', });
lyr_KecamatanCiawi_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'LUAS': 'hidden field', 'Desa': 'inline label - always visible', });
lyr_KecamatanCiawi_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});