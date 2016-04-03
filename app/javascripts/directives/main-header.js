/**
 *
 * @name mainHeader
 * @summery the template of main header is separateled by this directive in order to make index.html more clear
 *
 */
app.directive('mainHeader', function () {
  return {
    templateUrl: '/templates/misc/main-header.html',
    replace: true
  };
});
