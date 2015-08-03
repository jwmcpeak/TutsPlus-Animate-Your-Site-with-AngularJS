app.factory("Account", [
    "$http", "$q", "Session", function ($http, $q, session) {
        var accountService = {};
        
        var transformData = function (obj) {
            var str = [];
            
            for (var p in obj) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
            
            return str.join("&");
        };
        
        accountService.login = function (username, password) {
            var result = $q.defer();
            
            var data = {
                username: username,
                password: password
            };
            
            $http.post("/account/login", data, {
                transformRequest: transformData,
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }).success(function (res) {
                return result.resolve(res);
            }).error(function (res) {
                return result.reject(res);
            });
            
            return result.promise;
        };
        
        accountService.logout = function () {
            var result = $q.defer();           
          
            $http.get("/account/logout")
                .success(function (res) {
                session.clear();
                result.resolve(res);
            })
                .error(function (res) {
                result.reject(res);
            });
            
            return result.promise;
        };
        
        accountService.register = function (name, email, password, confirmPassword) {
            var result = $q.defer();
            
            var data = { 
                name: name, 
                username: email, 
                password: password, 
                confirm: confirmPassword 
            };
            
            $http.post("/account/register", data, {
                transformRequest: transformData,
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }).success(function (res) {
                result.resolve(res);
            }).error(function (res) {
                result.reject(res);
            });
            
            return result.promise;
        };
        
        return accountService;
    }]);