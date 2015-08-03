app.factory("Users", 
[
    "$http", "$q", "Session", 
    function ($http, $q, session) {
        return {
            getUsers: function () {
                var result = $q.defer();
                
                $http.get("/api/users").success(function (res) {
                    result.resolve(res);
                }).error(function (res) {
                    result.reject(res);
                });
                
                return result.promise;
            }
        };
    }]);