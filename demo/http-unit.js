"use strict";

describe('FetchController', function () {
    it('should fetch the URL', function() {
        var testUrl = "testurl",
            called = false,
            scope = {},
            http = function (options) {
                called = true;
                expect(options.url).toBe(testUrl);
                var obj = jasmine.createSpyObj('$http', ['success', 'error']);
                return obj;
            },
            ctrl = new FetchController(scope, http);

            scope.url = testUrl;
            scope.fetch();
            expect(called).toBeTruthy();
    });

});
