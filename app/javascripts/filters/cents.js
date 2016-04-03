'use strict';

/**
 * @name cents
 * @summery filter for fixing 2 floating points for cents of price and separating using comma
 * This filter is just a sample
 *
 **/
app.filter('cents', function () {
  return function (text) {
    return parseFloat(text).toFixed(2).replace(".", ",");
  };
});
