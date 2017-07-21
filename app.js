var app = angular.module('chat', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('agent', {
            url: "/agent",
            templateUrl: "agent.html",
            controller: 'cntrl'
        })
});
app.run(function ($location, $rootScope) {
    $location.url('/agent')
})