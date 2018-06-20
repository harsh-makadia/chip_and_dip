 var app = angular.module('myApp', ['ngRoute']);

 // require()

 app.config(function($routeProvider) {
     $routeProvider
     .when("/", {
         templateUrl : "./views/home.html",
         controller: "homeController"
     })
     .when("/aboutus", {
         templateUrl : "./views/about.html",
         controller: "aboutController"
     })
     .when("/products", {
         templateUrl : "./views/products.html",
         controller: "productsController"
     })
     .when("/contact", {
         templateUrl : "./views/contacts.html",
         controller: "contactsController"
     })
     .when("/details", {
         templateUrl : "./views/details.html",
         controller: "detailsController"
     })
     .otherwise("/", {
        templateUrl : "./views/home.html"
     })
 });

 // app.controller('productsController', require('./scripts/products.controller.js'));
 // app.controller('homeController', require('./scripts/home.controller.js'));
 // app.controller('aboutController', require('./scripts/about.controller.js'));
 // app.controller('contactsController', require('./scripts/contacts.controller.js'));
