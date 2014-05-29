describe("hello-protractor", function() {

    var ptor = protractor.getInstance();

    describe("index", function() {

        it("should display the correct title", function() {
            ptor.get('./#');
            expect(ptor.getTitle()).toBe("Albumate");
        });

        it("should have a jumbotron link to the artists page", function() {
            ptor.get('./#');
            expect( element(by.css('.jumbotron p a')).getAttribute('href') ).toContain(ptor.baseUrl + "#/artist/list");
        });

        it("should navigate to the artists page when clicking the jumbotron link", function() {
            ptor.get('./#');

            element(by.css('.jumbotron p a')).click();

            expect(ptor.getCurrentUrl()).toContain(ptor.baseUrl + "#/artist/list");
        });

        it("should list 5 entries in the artist/list", function() {
            ptor.get('./#/artist/list');

            element.all(by.repeater('entry in entries.items')).then(function(rows) {
                expect(rows.length).toBe(5);
            });
        });

    });

});