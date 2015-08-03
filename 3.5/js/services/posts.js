app.factory("Posts", ["$timeout", "$q", function ($timeout, $q) {
    return {
        getPosts: function () {
            var data = [{
                id: 1,
                title: "First Message",
                message: "This is the first message.",
                displayName: "John Doe",
                dateCreated: new Date(2015, 3, 24)
            }, {
                id: 2,
                title: "Second Message",
                message: "This is the second message.",
                displayName: "Jane Doe",
                dateCreated: new Date(2015, 4, 20)
            }, {
                id: 3,
                title: "Third Message",
                message: "This is the third message.",
                displayName: "Jim Doe",
                dateCreated: new Date(2015, 4, 24)
            }, {
                id: 4,
                title: "Fourth Message",
                message: "This is the fourth message.",
                displayName: "James Doe",
                dateCreated: new Date(2015, 5, 10)
            }];

            var defer = $q.defer();

            $timeout(function () {
                defer.resolve(data);
            });

            return defer.promise;
        }
    };
}]);