const { homeRouter } = require('./home');
const { usersRouter } = require('./users');
const { loginRouter } = require('./login');

const addRoutes = (app) => {
    app.use('/', homeRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/login', loginRouter);
}

module.exports = {
    addRoutes: addRoutes
}
