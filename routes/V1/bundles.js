const express = require('express');
const bundleControl = require('../controllers/bundle.controller');

const router = express.Router();

//get the url from the .env file



router.get('/user', bundleControl.get_all_user_bundles);
router.get('/:id', bundleControl.get_bundle);
router.get('/active', bundleControl.get_user_current_bundle);//use the jwt token to get the user id and details
router.get('/:id/products', bundleControl.get_bundle_products);

router.get('/share-cart', bundleControl.share_bundle);//share the cart with another person user or not 
router.post('/', bundleControl.create_bundle);
router.update('/', bundleControl.update_bundle);
router.delete('/', bundleControl.delete_bundle);




module.exports = router;