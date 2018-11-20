const Decorator = function(){
  this.paintStock = [];
}

Decorator.prototype.addPaint = function (paint) {
  this.paintStock.push(paint);
};

Decorator.prototype.totalLitres = function () {
  let stockVolume = 0;
  for (paint of this.paintStock){
    stockVolume += paint.litres
  };
  return stockVolume;
};

module.exports = Decorator;
