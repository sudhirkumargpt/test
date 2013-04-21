define(['appModule'], function(app)
{
    app.lazy.controller('AboutViewController',
    [
        '$scope',

        function($scope)
        {
            $scope.page =
            {
                heading: 'About Us'
            };
        }
    ]);
});