const authController = require('../controllers/auth');
const pollsController = require('../controllers/polls');
const authMiddleware = require('../middlewares/auth');


// Define routes for accessing various pages of the app. Most routes will initiate a render of the relevant view
// Routes for polls and login will prompt authentications
module.exports = app => {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/landingpage', (req, res) =>{
        res.render('landingpage');
    });

    app.get('/createPoll', (req, res) => {
        res.render('createPoll');
    });
    app.get('/pleaselogin', (req, res) => {
        res.render('pleaselogin');
    });
    app.get('/viewPolls', (req, res) => {
        res.render('viewPolls');
    })

    app.get('/login', (req, res) => {
        res.render('login');
    });
    app.post('/login', authController.login);
    app.post('/', authController.register);

    app.get('/polls', authMiddleware.checkAuth, pollsController.getPolls);
    app.get('/polls/:session-id', pollsController.getPollByID);
    app.post('/polls', authMiddleware.checkAuth, pollsController.addPoll);

    app.get('/restricted', (req, res) => {
        res.render('restricted');
    });

    
    
};

