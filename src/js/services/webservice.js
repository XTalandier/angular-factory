angular
    .module('AngularFactory.services.Internal', [])

    .factory('Webservice', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
        var url = 'http://mon-service.com';

        function post(action, data) {
            var def = $q.defer();

            data.action = action;

            $http({
                url: url,
                data: data,
                method: 'POST'
            }).success(function (data) {
                def.resolve(data);
            }).error(function (err) {

                $rootScope.$emit('app:webserviceError', {
                    url: url,
                    data: data,
                    error: err
                });

                def.reject(err);

            });

            return def.promise;
        }

        function get(action, data){
            var def = $q.defer();

            data.action = action;
            var myURL = url + '?';

            for(var k in data){
                myURL+= k + '=' + data[k] + '&';
            }

            $http({
                url: myURL,
                method: 'GET'
            }).success(function (data) {
                def.resolve(data);
            }).error(function (err) {

                $rootScope.$emit('app:webserviceError', {
                    url: url,
                    data: data,
                    error: err
                });

                def.reject(err);

            });

            return def.promise;

        }

        return {
            get: get,
            post: post
        }

    }]);



