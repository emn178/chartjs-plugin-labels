/**
 * [Chart.PieceLabel.js]{@link https://github.com/emn178/Chart.PieceLabel.js}
 *
 * @version 0.1.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2017
 * @license MIT
 */
(function () {
  Chart.pluginService.register({
    afterDraw: function (chartInstance) {
      if (!chartInstance.options.pieceLabel) {
        return;
      }
      var ctx = chartInstance.chart.ctx,
        options = chartInstance.config.options,
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
              text = dataset.data[i].toString();
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
            ctx.textBaseline = 'top';
            ctx.textAlign = 'center';
            ctx.fillText(text, tooltipPosition.x, tooltipPosition.y - fontSize / 2);
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
