const Paint = function(litres) {
  this.litres = litres;
}

Paint.prototype.checkIfEmpty = function () {
  if (this.litres > 0) {
    return false;
  } else {
    return true;
  }
};

Paint.prototype.emptyPaint = function () {
  this.litres = 0
};

module.exports = Paint;
