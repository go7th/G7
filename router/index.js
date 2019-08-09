module.exports = function(app) {
    //home
    app.use('/', require('./home'));
    //api
    app.use('/api',require('./api'));
}
