define([], function()
{
    return function(dependencies)
    {
        var definition =
        {
            resolver: ['$q', function($q)
            {
                var deferred = $q.defer();

                require(dependencies, function()
                {
                    deferred.resolve();
                });

                return deferred.promise;
            }]
        }

        return definition;
    }
});