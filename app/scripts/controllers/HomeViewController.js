define(['appModule'], function(app)
{
    app.lazy.controller('HomeViewController',
    [
        '$scope',

        function($scope)
        {
            $scope.page =
            {
                heading: 'Welcome'
            };
        }
    ]);
});