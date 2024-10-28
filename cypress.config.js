const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs:true, 
    baseUrl: 'https://nonprod-app.poplin.co/',
    email:'andrew+ggg@poplin.co',
    password:'Password1!',
    defaultCommandTimeout : 15000,
    requestTimeout : 15000,
  },
});
