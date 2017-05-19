app.config( function($routeProvider) {
  $routeProvider
    .when("/home/page", {
      templateUrl: "partials/home-page.html",
      controller: "HomePageCtrl"
    })
    .when("/highway/one", {
      templateUrl: "partials/highway-one.html",
      controller: "HighwayOneCtrl"
    })
    .when("/highway/two", {
      templateUrl: "partials/highway-two.html",
      controller: "HighwayTwoCtrl"
    });
});