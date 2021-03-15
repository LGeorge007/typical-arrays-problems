exports.min = function min (array) {
  return (array === undefined||array.length === 0) ? 0 : array.reduce((prev, element) => element<prev ? element : prev);
}

exports.max = function max (array) {
  return (array === undefined||array.length === 0) ? 0 : array.reduce((prev, element) => element>prev ? element : prev);
}

exports.avg = function avg (array) {
  return (array === undefined||array.length === 0) ? 0 : array.reduce((accum, element) => accum + element) / array.length;
}
