angular
    .module('AngularFactory', [
        'ngRoute',
        'duScroll',
        'ngSanitize',
        'angular-storage',
        'pascalprecht.translate',
        'AngularFactory.controllers.Main',
        'AngularFactory.models.App',
        'AngularFactory.directive.Internal',
        'AngularFactory.services.Internal',
        'AngularFactory.controllers.Hello'
    ])
    .config(function ($routeProvider, $translateProvider) {
        $routeProvider
            //.when('/', {templateUrl: 'home.html', reloadOnSearch: false})
            .when(
            '/hello',
            {
                templateUrl: 'packages/hello/hello.html',
                controller: 'MainHelloController',
                reloadOnSearch: false
            })
            .otherwise({
                redirectTo: '/'
            });


        for (var lang in i18nDATA) {
            $translateProvider.translations(lang, i18nDATA[lang]);
        }

        $translateProvider.preferredLanguage('fr_FR');

    });
