var assert = require('assert');

describe('webdriver.io page', function() {
	
    it('should have the right title - the fancy generator way', function () {
        browser.url('https://novosibirsk.n1.ru/');
        var title = browser.getTitle();
        assert.equal(title, 'Недвижимость в Новосибирске, объявления о продаже недвижимости без посредников и агентств, с фото - N1.RU Новосибирск');
    });
});
