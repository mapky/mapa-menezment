var wms_layers = [];

var lyr_OrtofototosnmkyZBGISGK_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
                              attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofototo snímky - ZBGIS GKÚ',
                            popuplayertitle: 'Ortofototo snímky - ZBGIS GKÚ',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofototosnmkyZBGISGK_0, 0]);
var lyr_DMR50TieovanrelifZBGISGK_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_dmr_wms/service.svc/get",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'DMR 5.0 - Tieňovaný reliéf - ZBGIS GKÚ',
                            popuplayertitle: 'DMR 5.0 - Tieňovaný reliéf - ZBGIS GKÚ',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DMR50TieovanrelifZBGISGK_1, 0]);

        var lyr_PodkladovmapaCartoLight_2 = new ol.layer.Tile({
            'title': 'Podkladová mapa - Carto Light',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_Menementovopatrenia_3 = new ol.format.GeoJSON();
var features_Menementovopatrenia_3 = format_Menementovopatrenia_3.readFeatures(json_Menementovopatrenia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Menementovopatrenia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Menementovopatrenia_3.addFeatures(features_Menementovopatrenia_3);
var lyr_Menementovopatrenia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Menementovopatrenia_3, 
                style: style_Menementovopatrenia_3,
                popuplayertitle: 'Menežmentové opatrenia',
                interactive: true,
    title: 'Menežmentové opatrenia<br />\
    <img src="styles/legend/Menementovopatrenia_3_0.png" /> 1.1.1 Bezzásahový režim<br />\
    <img src="styles/legend/Menementovopatrenia_3_1.png" /> 1.2.1 Jemnejšie spôsoby hospodárenia<br />\
    <img src="styles/legend/Menementovopatrenia_3_2.png" /> 1.3.1 Hluchánia oblasť<br />\
    <img src="styles/legend/Menementovopatrenia_3_3.png" /> 1.4.1 Bežné obhospodarovanie v lesoch<br />\
    <img src="styles/legend/Menementovopatrenia_3_4.png" /> 2.1.1 Pravidelná starostlivosť o TTP<br />\
    <img src="styles/legend/Menementovopatrenia_3_5.png" /> 2.2.1 Menežmentové opatrenia na mokradiach<br />\
    <img src="styles/legend/Menementovopatrenia_3_6.png" /> 2.3.1 Menežmentové opatrenia v brehových porastoch<br />\
    <img src="styles/legend/Menementovopatrenia_3_7.png" /> 2.3.1 Zachovanie brehových porastov<br />\
    <img src="styles/legend/Menementovopatrenia_3_8.png" /> Neurčené<br />' });
var format_HraniceCHKOKysuce_4 = new ol.format.GeoJSON();
var features_HraniceCHKOKysuce_4 = format_HraniceCHKOKysuce_4.readFeatures(json_HraniceCHKOKysuce_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HraniceCHKOKysuce_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HraniceCHKOKysuce_4.addFeatures(features_HraniceCHKOKysuce_4);
var lyr_HraniceCHKOKysuce_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HraniceCHKOKysuce_4, 
                style: style_HraniceCHKOKysuce_4,
                popuplayertitle: 'Hranice CHKO Kysuce',
                interactive: false,
                title: '<img src="styles/legend/HraniceCHKOKysuce_4.png" /> Hranice CHKO Kysuce'
            });
var format_zemiaeurpskehovznamu_5 = new ol.format.GeoJSON();
var features_zemiaeurpskehovznamu_5 = format_zemiaeurpskehovznamu_5.readFeatures(json_zemiaeurpskehovznamu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zemiaeurpskehovznamu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zemiaeurpskehovznamu_5.addFeatures(features_zemiaeurpskehovznamu_5);
var lyr_zemiaeurpskehovznamu_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zemiaeurpskehovznamu_5, 
                style: style_zemiaeurpskehovznamu_5,
                popuplayertitle: 'Územia európskeho významu',
                interactive: false,
                title: '<img src="styles/legend/zemiaeurpskehovznamu_5.png" /> Územia európskeho významu'
            });

lyr_OrtofototosnmkyZBGISGK_0.setVisible(false);lyr_DMR50TieovanrelifZBGISGK_1.setVisible(true);lyr_PodkladovmapaCartoLight_2.setVisible(true);lyr_Menementovopatrenia_3.setVisible(true);lyr_HraniceCHKOKysuce_4.setVisible(true);lyr_zemiaeurpskehovznamu_5.setVisible(true);
var layersList = [lyr_OrtofototosnmkyZBGISGK_0,lyr_DMR50TieovanrelifZBGISGK_1,lyr_PodkladovmapaCartoLight_2,lyr_Menementovopatrenia_3,lyr_HraniceCHKOKysuce_4,lyr_zemiaeurpskehovznamu_5];
lyr_Menementovopatrenia_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KOD_UEV': 'KOD_UEV', 'NAZOV_UEV': 'NAZOV_UEV', 'POSOBNOST': 'POSOBNOST', 'na_vode': 'na_vode', 'EFP': 'Ekologicko-funkčné plochy', 'Manazment': 'Menežmentové opatrenia', 'Biotop_spo': 'Biotopy', });
lyr_HraniceCHKOKysuce_4.set('fieldAliases', {'HECTARES': 'HECTARES', 'NAZOV': 'NAZOV', 'VYM_CHKO': 'VYM_CHKO', 'VYM_HA': 'VYM_HA', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_zemiaeurpskehovznamu_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KOD_UEV': 'Kód ÚEV', 'NAZOV_UEV': 'Názov ÚEV', 'POSOBNOST': 'Pôsobnosť', 'VYMERA_HA': 'Výmera v ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'na_vode': 'na_vode', });
lyr_Menementovopatrenia_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KOD_UEV': 'TextEdit', 'NAZOV_UEV': 'TextEdit', 'POSOBNOST': 'TextEdit', 'na_vode': 'TextEdit', 'EFP': 'TextEdit', 'Manazment': 'TextEdit', 'Biotop_spo': 'TextEdit', });
lyr_HraniceCHKOKysuce_4.set('fieldImages', {'HECTARES': 'TextEdit', 'NAZOV': 'TextEdit', 'VYM_CHKO': 'TextEdit', 'VYM_HA': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_zemiaeurpskehovznamu_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KOD_UEV': 'TextEdit', 'NAZOV_UEV': 'TextEdit', 'POSOBNOST': 'TextEdit', 'VYMERA_HA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'na_vode': 'TextEdit', });
lyr_Menementovopatrenia_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KOD_UEV': 'hidden field', 'NAZOV_UEV': 'hidden field', 'POSOBNOST': 'hidden field', 'na_vode': 'hidden field', 'EFP': 'hidden field', 'Manazment': 'no label', 'Biotop_spo': 'hidden field', });
lyr_HraniceCHKOKysuce_4.set('fieldLabels', {'HECTARES': 'no label', 'NAZOV': 'no label', 'VYM_CHKO': 'no label', 'VYM_HA': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', });
lyr_zemiaeurpskehovznamu_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KOD_UEV': 'hidden field', 'NAZOV_UEV': 'header label - visible with data', 'POSOBNOST': 'hidden field', 'VYMERA_HA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'na_vode': 'hidden field', });
lyr_zemiaeurpskehovznamu_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});