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
                interactive: false,
    title: 'Kemiringan Lereng<br />\
    <img src="styles/legend/KemiringanLereng_5_0.png" /> 0-8%<br />\
    <img src="styles/legend/KemiringanLereng_5_1.png" /> 8-15%<br />\
    <img src="styles/legend/KemiringanLereng_5_2.png" /> 15-25%<br />\
    <img src="styles/legend/KemiringanLereng_5_3.png" /> 25-45%<br />\
    <img src="styles/legend/KemiringanLereng_5_4.png" /> >45%<br />'
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
var format_TitikSurvey_8 = new ol.format.GeoJSON();
var features_TitikSurvey_8 = format_TitikSurvey_8.readFeatures(json_TitikSurvey_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSurvey_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSurvey_8.addFeatures(features_TitikSurvey_8);
var lyr_TitikSurvey_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikSurvey_8, 
                style: style_TitikSurvey_8,
                popuplayertitle: "Titik Survey",
                interactive: true,
                title: '<img src="styles/legend/TitikSurvey_8.png" /> Titik Survey'
            });
var format_KecamatanCiawi_9 = new ol.format.GeoJSON();
var features_KecamatanCiawi_9 = format_KecamatanCiawi_9.readFeatures(json_KecamatanCiawi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanCiawi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanCiawi_9.addFeatures(features_KecamatanCiawi_9);
var lyr_KecamatanCiawi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanCiawi_9, 
                style: style_KecamatanCiawi_9,
                popuplayertitle: "Kecamatan Ciawi",
                interactive: true,
                title: '<img src="styles/legend/KecamatanCiawi_9.png" /> Kecamatan Ciawi'
            });
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleMap_1,],
                                fold: "open",
                                title: "Base Maps"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMap_1.setVisible(true);lyr_PostEventNDVI_2.setVisible(true);lyr_PreEventNDVI_3.setVisible(true);lyr_rdNDVI_4.setVisible(true);lyr_KemiringanLereng_5.setVisible(true);lyr_AreaPotensiLongsor_6.setVisible(true);lyr_TitikLongsor_7.setVisible(true);lyr_TitikSurvey_8.setVisible(true);lyr_KecamatanCiawi_9.setVisible(true);
var layersList = [group_BaseMaps,lyr_PostEventNDVI_2,lyr_PreEventNDVI_3,lyr_rdNDVI_4,lyr_KemiringanLereng_5,lyr_AreaPotensiLongsor_6,lyr_TitikLongsor_7,lyr_TitikSurvey_8,lyr_KecamatanCiawi_9];
lyr_KemiringanLereng_5.set('fieldAliases', {'slope_clas': 'slope_clas', 'luas': 'luas', 'kelas': 'kelas', 'kemiringan': 'kemiringan', });
lyr_AreaPotensiLongsor_6.set('fieldAliases', {'zone': 'zone', 'count': 'count', 'luas': 'luas', });
lyr_TitikLongsor_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'foto': 'foto', });
lyr_TitikSurvey_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'foto': 'foto', });
lyr_KecamatanCiawi_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'Desa': 'Desa', });
lyr_KemiringanLereng_5.set('fieldImages', {'slope_clas': 'Range', 'luas': 'TextEdit', 'kelas': 'TextEdit', 'kemiringan': 'TextEdit', });
lyr_AreaPotensiLongsor_6.set('fieldImages', {'zone': 'Range', 'count': 'Range', 'luas': 'TextEdit', });
lyr_TitikLongsor_7.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'foto': 'ExternalResource', });
lyr_TitikSurvey_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'foto': 'ExternalResource', });
lyr_KecamatanCiawi_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'Desa': '', });
lyr_KemiringanLereng_5.set('fieldLabels', {'slope_clas': 'no label', 'luas': 'no label', 'kelas': 'no label', 'kemiringan': 'no label', });
lyr_AreaPotensiLongsor_6.set('fieldLabels', {'zone': 'hidden field', 'count': 'hidden field', 'luas': 'inline label - always visible', });
lyr_TitikLongsor_7.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'foto': 'inline label - always visible', });
lyr_TitikSurvey_8.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'foto': 'no label', });
lyr_KecamatanCiawi_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'LUAS': 'hidden field', 'Desa': 'inline label - always visible', });
lyr_KecamatanCiawi_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});