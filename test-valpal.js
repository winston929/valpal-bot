var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
client
    .init()
    .url('https://www.liverpoolecho.co.uk/news/property/inside-outlandishly-designed-house-market-14585716')
    .execute(() => {
        //Click accpet cookies inside the iframe
        document.querySelector('.captify-iframe')
                .contentDocument.querySelector('.gdpr-button.primary').click();
    })
    .addValue('input.postcode', 'E14 5AB')
    .click('.find-button')
    .execute(() => {
        (document.querySelectorAll('.valpal-submit-button')).forEach((button, i) => {
            setTimeout(() => {
                button.click();
            }, 1000 * (i + 1));
        });
    })
    .catch(console.info)