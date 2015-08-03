app.factory("Session", ["$http", function ($http) {
    return {
        getToken: function() {
            var value = sessionStorage.getItem("token");

            if (value) return value;

            return undefined;
        },
        getEmail: function() {
            var value = sessionStorage.getItem("email");

            if (value) return value;

            return undefined;
        },
        getIsAdmin: function() {
            var value = sessionStorage.getItem("isAdmin");

            if (value) return value == "true";

            return undefined;
        },
        setUserData: function(user) {
            sessionStorage.setItem("token", user.token);
            sessionStorage.setItem("email", user.username);
            
            $http.defaults.headers.common["Authorization"] = "Bearer " + user.token;

            if (user.isAdmin) {
                sessionStorage.setItem("isAdmin", "true");
            }
        },
        clear: function() {
            sessionStorage.clear();
            
            $http.defaults.headers.common["Authorization"] = undefined;            
        }
    };
}]);