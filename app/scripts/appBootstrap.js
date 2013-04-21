curl({
    baseUrl: '/scripts',
    apiName: 'require',
    paths: {}
});

require
(
    [
        'appModule'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);