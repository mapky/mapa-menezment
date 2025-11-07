var size = 0;
var placement = 'point';
function categories_Menementovopatrenia_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1.1.1 Bezzásahový režim':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(26,150,65,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '1.2.1 Jemnejšie spôsoby hospodárenia':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(96,184,86,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '1.3.1 Hluchánia oblasť':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(166,217,106,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '1.4.1 Bežné obhospodarovanie v lesoch':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,236,149,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2.1.1 Pravidelná starostlivosť o TTP':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,192,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2.2.1 Menežmentové opatrenia na mokradiach':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,215,145,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2.3.1 Menežmentové opatrenia v brehových porastoch':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,174,97,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2.3.1 Zachovanie brehových porastov':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,100,63,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Neurčené':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Menementovopatrenia_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Manazment");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Menementovopatrenia_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
