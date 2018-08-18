# Chart.PieceLabel.js
Chart.js plugin to display labels on pie, doughnut and polar area chart.

## Demo
[Demo](http://emn178.github.io/Chart.PieceLabel.js/samples/demo/)

## Download
[Compress](https://raw.github.com/emn178/Chart.PieceLabel.js/master/build/Chart.PieceLabel.min.js)  
[Uncompress](https://raw.github.com/emn178/Chart.PieceLabel.js/master/src/Chart.PieceLabel.js)

## Installation
You can also install Chart.PieceLabel.js by using Bower.

    bower install Chart.PieceLabel.js


Or node.js, you can use this command to install:

    npm install chart.piecelabel.js

## Notice
v0.7.0 has deprecated options. Please see [CHANGELOG v0.7.0](https://github.com/emn178/Chart.PieceLabel.js/blob/master/CHANGELOG.md#v070--2017-08-03)  
v0.4.0 has breaking changes. Please see [CHANGELOG v0.4.0](https://github.com/emn178/Chart.PieceLabel.js/blob/master/CHANGELOG.md#v040--2017-05-26)

## Usage
JavaScript
```JavaScript
new Chart(ctx, {
  type: type,
  data: data,
  options: {
    pieceLabel: {
      // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
      render: 'value',

      // precision for percentage, default is 0
      precision: 0,

      // identifies whether or not labels of value 0 are displayed, default is false
      showZero: true,

      // font size, default is defaultFontSize
      fontSize: 12,

      // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
      fontColor: '#fff',

      // font style, default is defaultFontStyle
      fontStyle: 'normal',

      // font family, default is defaultFontFamily
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // draw text shadows under labels, default is false
      textShadow: true,

      // text shadow intensity, default is 6
      shadowBlur: 10,

      // text shadow X offset, default is 3
      shadowOffsetX: -5,

      // text shadow Y offset, default is 3
      shadowOffsetY: 5,

      // text shadow color, default is 'rgba(0,0,0,0.3)'
      shadowColor: 'rgba(255,0,0,0.75)',

      // draw label in arc, default is false
      arc: true,

      // position to draw label, available value is 'default', 'border' and 'outside'
      // default is 'default'
      position: 'default',

      // draw label even it's overlap, default is false
      overlap: true,

      // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
      showActualPercentages: true,

      // set images when `render` is 'image'
      images: [
        {
          src: 'image.png',
          width: 16,
          height: 16
        }
      ],

      // add padding when position is `outside`
      // default is 2
      outsidePadding: 4,

      // add margin of text when position is `outside` or `border`
      // default is 2
      textMargin: 4
    }
  }
});

// custom render
{
  render: function (args) {
    // args will be something like:
    // { label: 'Label', value: 123, percentage: 50, index: 0, dataset: {...} }
    return '$' + args.value;

    // return object if it is image
    // return { src: 'image.png', width: 16, height: 16 };
  }
}

// dynamic fontColor
{
  fontColor: function (args) {
    // args will be something like:
    // { index: 0, dataset: {...} }
    return myColorTransfer(args.dataset.backgroundColor[index]);
  }
}
```

Support multiple options, eg.

```JavaScript
pieceLabel: [
  {
    render: 'label',
    position: 'outside'
  },
  {
    render: 'value'
  }
]
```

### For Angular 2+
If you use [angular2-chartjs](https://github.com/emn178/angular2-chartjs), you can import by this:
```
import { ChartModule } from 'angular2-chartjs';
import 'chart.piecelabel.js';
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/Chart.PieceLabel.js  
Author: Chen, Yi-Cyuan (emn178@gmail.com)
