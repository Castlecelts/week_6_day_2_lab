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

Decorator.prototype.hasEnoughPaint = function (room) {
  if (this.totalLitres() >= room.area) {
    return true;
  }
  else {
    return false;
  }
};

Decorator.prototype.paintRoom = function (room) {
  if (this.hasEnoughPaint(room) === true){
    room.paintRoom()
  }
  else {
    {
      return false;
    }
  }
};

module.exports = Decorator;
