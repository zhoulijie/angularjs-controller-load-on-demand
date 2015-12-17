require.config({
    paths: {
        'angular': '../lib/angular-1.3.0.14/angular.min',
        'uiRoute' : '../lib/angular-ui-router',
        'routes' : 'routes'
    },
    waitSeconds:0,
    shim: {
        'angular' : {'exports' : 'angular'},
        'uiRoute' : {
          deps : ['angular']
        }
    },
    priority: [
        "angular"
    ],
    urlArgs: 'v=1.0.0.1'
});

require(['angular',
         'app',
         'routes',
         'uiRoute'
], function (angular) {
    angular.bootstrap(document, ['app']);
});
