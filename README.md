# Chart.PieceLabel.js
PieceLabel plugin for Chart.js.

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
v0.4.0 has breaking changes. Please see [CHANGELOG](https://github.com/emn178/Chart.PieceLabel.js/blob/master/CHANGELOG.md#v040--2017-05-26)

## Usage
JavaScript
```JavaScript
new Chart(ctx, {
  type: type,
  data: data,
  options: {
    pieceLabel: {
      // mode 'label', 'value' or 'percentage', default is 'percentage'
      mode: 'value',

      // precision for percentage, default is 0
      precision: 0,
      
      //identifies whether or not labels of value 0 are displayed, default is false
      showZero: true,

      // font size, default is defaultFontSize
      fontSize: 12,

      // font color, default is '#fff'
      fontColor: '#fff',

      // font style, default is defaultFontStyle
      fontStyle: 'normal',

      // font family, default is defaultFontFamily
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

      // draw label in arc, default is false
      arc: true,

      // position to draw label, available value is 'default', 'border' and 'outside'
      // default is 'default'
      position: 'default',

      // format text, work when mode is 'value'
      format: function (value) { 
        return '$' + value;
      }
    }
  }
});
```

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/Chart.PieceLabel.js  
Author: Chen, Yi-Cyuan (emn178@gmail.com)
