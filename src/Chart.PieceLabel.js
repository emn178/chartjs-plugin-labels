/**
 * [Chart.PieceLabel.js]{@link https://github.com/emn178/Chart.PieceLabel.js}
 *
 * @version 0.2.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2017
 * @license MIT
 */
(function () {
  function drawArcText(context, str, centerX, centerY, radius, startAngle, endAngle) {
    context.save();
    context.translate(centerX, centerY);
    startAngle += Math.PI / 2;
    endAngle += Math.PI / 2;
    var mertrics = context.measureText(str);
    startAngle += (endAngle - (mertrics.width / radius + startAngle)) / 2;
    context.rotate(startAngle);
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      mertrics = context.measureText(char);
      context.save();
      context.translate(0, -1 * radius);
      context.fillText(char, 0, 0);
      context.restore();
      context.rotate(mertrics.width / radius);
    }
    context.restore();
  }

  Chart.pluginService.register({
    afterDraw: function (chartInstance) {
      if (!chartInstance.options.pieceLabel) {
        return;
      }
      var ctx = chartInstance.chart.ctx,
        options = chartInstance.config.options,
        arcText = chartInstance.options.pieceLabel.arcText || false,
        format = chartInstance.options.pieceLabel.format,
        precision = chartInstance.options.pieceLabel.precision || 0,
        fontSize = chartInstance.options.pieceLabel.fontSize || options.defaultFontSize,
        fontColor = chartInstance.options.pieceLabel.fontColor || '#fff',
        fontStyle = chartInstance.options.pieceLabel.fontStyle || options.defaultFontStyle,
        fontFamily = chartInstance.options.pieceLabel.fontFamily || options.defaultFontFamily,
        hasTooltip = chartInstance.tooltip._active && chartInstance.tooltip._active.length;

      chartInstance.config.data.datasets.forEach(function (dataset, datasetIndex) {
        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
        var totalPercentage = 0;
        for (var i = 0; i < meta.data.length; i++) {
          var element = meta.data[i],
            view = element._view;

          if (hasTooltip) {
            element.draw();
          }

          var text;
          switch (chartInstance.options.pieceLabel.mode) {
            case 'value':
              var value = dataset.data[i];
              if (format) {
                value = format(value);
              }
              text = value.toString();
              break;
            case 'label':
              text = chartInstance.config.data.labels[i];
              break;
            case 'percentage':
            default:
              var percentage = view.circumference / options.circumference * 100;
              percentage = parseFloat(percentage.toFixed(precision));
              totalPercentage += percentage;
              if (totalPercentage > 100) {
                percentage -= totalPercentage - 100;
              }
              text = percentage + '%';
              break;
          }
          ctx.save();
          ctx.beginPath();
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
          var mertrics = ctx.measureText(text);
          var tooltipPosition = element.tooltipPosition();
          var left = tooltipPosition.x - mertrics.width / 2,
            right = tooltipPosition.x + mertrics.width / 2,
            top = tooltipPosition.y - fontSize / 2,
            bottom = tooltipPosition.y + fontSize / 2;
          var inRange = element.inRange(left, top) && element.inRange(left, bottom) &&
            element.inRange(right, top) && element.inRange(right, bottom);
          if (inRange) {
            ctx.fillStyle = fontColor;
            if (arcText) {
              ctx.textBaseline = 'middle';
              drawArcText(ctx, text, view.x, view.y, (view.innerRadius + view.outerRadius) / 2, view.startAngle, view.endAngle);
            } else {
              ctx.textBaseline = 'top';
              ctx.textAlign = 'center';
              ctx.fillText(text, tooltipPosition.x, tooltipPosition.y - fontSize / 2);
            }
          }
          ctx.restore();
        }
      });

      if (hasTooltip) {
        chartInstance.tooltip.draw();
      }
    }
  });
})();
