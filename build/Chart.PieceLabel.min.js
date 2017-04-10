/**
 * [Chart.PieceLabel.js]{@link https://github.com/emn178/Chart.PieceLabel.js}
 *
 * @version 0.3.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2017
 * @license MIT
 */
(function(){Chart.pluginService.register({afterDraw:function(d){if(d.options.pieceLabel){var g=d.chart.ctx,m=d.config.options,w=d.options.pieceLabel.mode,x=d.options.pieceLabel.arcText||!1,y=d.options.pieceLabel.borderText||!1,r=d.options.pieceLabel.format,z=d.options.pieceLabel.precision||0,n=d.options.pieceLabel.fontSize||m.defaultFontSize,t=d.options.pieceLabel.fontColor||"#fff",A=d.options.pieceLabel.fontStyle||m.defaultFontStyle,B=d.options.pieceLabel.fontFamily||m.defaultFontFamily,u=d.tooltip._active&&
d.tooltip._active.length;d.config.data.datasets.forEach(function(p,C){for(var v=p._meta[Object.keys(p._meta)[0]],q=0,l=0;l<v.data.length;l++){var c=v.data[l],a=c._view;u&&c.draw();var e;switch(w){case "value":e=p.data[l];r&&(e=r(e));e=e.toString();break;case "label":e=d.config.data.labels[l];break;default:e=a.circumference/m.circumference*100,e=parseFloat(e.toFixed(z)),q+=e,100<q&&(e-=q-100),e+="%"}g.save();g.beginPath();g.font=Chart.helpers.fontString(n,A,B);var b,f;if(y&&"pie"===d.config.type){f=
a.outerRadius/2;b=a.startAngle+(a.endAngle-a.startAngle)/2;var h=(a.outerRadius-f)/2+f;b={x:a.x+Math.cos(b)*h,y:a.y+Math.sin(b)*h}}else f=a.innerRadius,b=c.tooltipPosition();if(x){g.fillStyle=t;g.textBaseline="middle";var c=g,h=a.x,k=a.y;f=(f+a.outerRadius)/2;b=a.startAngle;a=a.endAngle;c.save();c.translate(h,k);k=a-b;b+=Math.PI/2;a+=Math.PI/2;h=c.measureText(e);b+=(a-(h.width/f+b))/2;if(!(a-b>k))for(c.rotate(b),a=0;a<e.length;a++)b=e.charAt(a),h=c.measureText(b),c.save(),c.translate(0,-1*f),c.fillText(b,
0,0),c.restore(),c.rotate(h.width/f);c.restore()}else f=g.measureText(e),a=b.x-f.width/2,f=b.x+f.width/2,h=b.y-n/2,k=b.y+n/2,c.inRange(a,h)&&c.inRange(a,k)&&c.inRange(f,h)&&c.inRange(f,k)&&(g.fillStyle=t,g.textBaseline="top",g.textAlign="center",g.fillText(e,b.x,b.y-n/2));g.restore()}});u&&d.tooltip.draw()}}})})();
