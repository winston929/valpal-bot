const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);
client.init()
      .url('http://reg-dev-cms-bertha.liverpoolecho.co.uk:8080/advertising?service=responsive')
      .execute(() => {
        //Click accpet cookies inside the iframe
        document.querySelector('.captify-iframe').contentDocument
                .querySelector('.gdpr-button.primary').click();
      })
      .addValue('#last_name', 'Winston Chan')
      .addValue('#company', 'Reach plc')
      .addValue('#zip', 'E14 5AB')
      .addValue('#email', 'winston.chan@reachplc.com')
      .addValue('#phone', '02079460800')
      .addValue(`[id='00N200000035O93']`, 'TESTING ONLY')
      .selectByVisibleText(`[id='00Nw0000003zD4l']`, 'Media')
      .selectByVisibleText(`[id='00Nw0000003zD4C']`, 'No')
      .click(`input[name='submit']`)
      .catch(console.info)