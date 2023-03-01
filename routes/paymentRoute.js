const express = require('express');
const { processPayment, paytmResponse, getPaymentStatus,orders ,verify} = require('../controllers/paymentController');
const { isAuthenticatedUser } = require('../middlewares/auth');

const router = express.Router();

router.route('/payment/process').post(processPayment);
// router.route('/stripeapikey').get(isAuthenticatedUser, sendStripeApiKey);

router.route('/callback').post(paytmResponse);

router.route('/payment/status/:id').get(isAuthenticatedUser, getPaymentStatus);
router.route('/payment/orders').post(orders);
router.route('/payment/verify').post(verify);


module.exports = router;