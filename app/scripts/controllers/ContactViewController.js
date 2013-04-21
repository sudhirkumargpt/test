define(['appModule'], function(app)
{
    app.lazy.controller('ContactViewController',
    [
        '$scope',

        function($scope)
        {
            $scope.page =
            {
                heading: 'Contact Us'
            };
        }
    ]);
});