require.config({
    baseUrl: '/scripts',
    paths: {}
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);