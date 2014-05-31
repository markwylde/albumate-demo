exports.config = {

    capabilities: {
        'browserName': 'firefox'
    },

    specs: [
        './e2e/**/*.spec.js'
    ],

    baseUrl: 'http://localhost/default/albumate/dist/'
}