/*
 Highstock JS v10.3.3 (2023-01-20)

 Hollow Candlestick series type for Highcharts Stock

 (c) 2010-2021 Karol Kolodziej

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/hollowcandlestick",["highcharts","highcharts/modules/stock"],function(g){b(g);b.Highcharts=g;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function g(b,c,a,h){b.hasOwnProperty(c)||(b[c]=h.apply(null,a),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:b[c]}})))}
b=b?b._modules:{};g(b,"Series/HollowCandlestick/HollowCandlestickPoint.js",[b["Core/Series/SeriesRegistry.js"]],function(b){var c=this&&this.__extends||function(){var b=function(a,e){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var e in a)a.hasOwnProperty(e)&&(b[e]=a[e])};return b(a,e)};return function(a,e){function c(){this.constructor=a}b(a,e);a.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}();return function(b){function a(){var a=
null!==b&&b.apply(this,arguments)||this;a.series=void 0;return a}c(a,b);a.prototype.getClassName=function(){var a=b.prototype.getClassName.apply(this),c=this.series.hollowCandlestickData[this.index];c.isBullish||"up"!==c.trendDirection||(a+="-bearish-up");return a};return a}(b.seriesTypes.candlestick.prototype.pointClass)});g(b,"Series/HollowCandlestick/HollowCandlestickSeries.js",[b["Series/HollowCandlestick/HollowCandlestickPoint.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"],b["Core/Axis/Axis.js"]],
function(b,c,a,g){var e=this&&this.__extends||function(){var b=function(a,f){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var f in a)a.hasOwnProperty(f)&&(b[f]=a[f])};return b(a,f)};return function(a,f){function m(){this.constructor=a}b(a,f);a.prototype=null===f?Object.create(f):(m.prototype=f.prototype,new m)}}(),k=c.seriesTypes.candlestick,l=a.addEvent,h=a.merge;a=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data=
void 0;a.hollowCandlestickData=[];a.options=void 0;a.points=void 0;return a}e(a,b);a.prototype.getPriceMovement=function(){var a=this.allGroupedData||this.yData,b=this.hollowCandlestickData;if(!b.length&&a&&a.length){b.push({isBullish:!0,trendDirection:"up"});for(var d=1;d<a.length;d++)b.push(this.isBullish(a[d],a[d-1]))}};a.prototype.getLineColor=function(a){return"up"===a?this.options.upColor||"#06b535":this.options.color||"#f21313"};a.prototype.getPointFill=function(a){return a.isBullish?"transparent":
"up"===a.trendDirection?this.options.upColor||"#06b535":this.options.color||"#f21313"};a.prototype.init=function(){b.prototype.init.apply(this,arguments);this.hollowCandlestickData=[]};a.prototype.isBullish=function(a,b){return{isBullish:a[0]<=a[3],trendDirection:a[3]<b[3]?"down":"up"}};a.prototype.pointAttribs=function(a,c){var d=b.prototype.pointAttribs.call(this,a,c);a=this.hollowCandlestickData[a.index];d.fill=this.getPointFill(a)||d.fill;d.stroke=this.getLineColor(a.trendDirection)||d.stroke;
c&&(c=this.options.states[c],d.fill=c.color||d.fill,d.stroke=c.lineColor||d.stroke,d["stroke-width"]=c.lineWidth||d["stroke-width"]);return d};a.defaultOptions=h(k.defaultOptions,{color:"#f21313",dataGrouping:{groupAll:!0,groupPixelWidth:10},lineColor:"#f21313",upColor:"#06b535",upLineColor:"#06b535"});return a}(k);l(a,"updatedData",function(){this.hollowCandlestickData.length&&(this.hollowCandlestickData.length=0)});l(g,"postProcessData",function(){this.series.forEach(function(a){a.is("hollowcandlestick")&&
a.getPriceMovement()})});a.prototype.pointClass=b;c.registerSeriesType("hollowcandlestick",a);"";return a});g(b,"masters/modules/hollowcandlestick.src.js",[],function(){})});
//# sourceMappingURL=hollowcandlestick.js.map