app.animation(".posts", ["$animateCss", function ($animateCss) {
    return {
        enter: function (element, done) {
            var el = element[0];
            var height = el.offsetHeight;
            var hr = el.querySelector("hr");
            var margin = parseInt(getComputedStyle(hr).getPropertyValue("margin-bottom"), 10);

            var value = (height + margin) * -1;
            var animator = $animateCss(element, {
                addClass: "foobar",
                from: { opacity: 0, marginBottom: value + "px"},
                to: { opacity: 1, marginBottom: margin + "px" }
            });

            return animator.start().done(function () {
                done();
            });
        },
        leave: function (element, done) {
            var el = element[0];
            var height = el.offsetHeight;
            var hr = el.querySelector("hr");
            var margin = parseInt(getComputedStyle(hr).getPropertyValue("margin-bottom"), 10);

            var value = (height + margin) * -1;
            return $animateCss(element, {
                to: { opacity: 0, marginBottom: value + "px" }
            });

        }
    }
}]);