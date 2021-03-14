exports.min = (array) => array && array.length ? array.sort((a, b) => a - b)[0] : 0;

exports.max = (array) => array && array.length ? array.sort((a, b) => b - a)[0] : 0;

exports.avg = (array) => array && array.length ? array.reduce((a, b) => a + b, 0) / array.length : 0