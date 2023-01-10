const express = require('express');

const router = express.Router();

//get the url from the .env file
const site = process.env.url

//get all the bundles in the db for admin
router.get('/', (req, res) => {
    //confirm that the user is an admin
    if(req.userData.isAdmin){
        Bundle.find()
        .select('_id user product quantity')
        .exec()
        .then(docs => {
            //if no bundles are found, return 404
            if(docs.length > 0){
                //if bundles are found, return 200 with the bundles
                res.status(200).json({
                    numberOfItems :docs.length,
                    bundles: docs.map(doc => {
                        return {
                            _id: doc._id,
                            user: doc.user,
                            product: doc.product,
                            quantity: doc.quantity,
                            request: {
                                type: 'GET',
                                url: site+'bundles/' + doc._id
                            }
                        }
                    })
                });
            } else {
                res.status(404).json({
                    message: 'No bundles found'
                });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    } else {
        //send restricted access message if the user is not an admin
        res.status(401).json({
            message: 'Restricted access'
        });
    }
});


//get bundle assinged to a user
router.get('/:userId', (req, res) => {
    const id = req.params.userId;
    //check if the user has a bundle
    Bundle.find({user: id})
    .select('_id user product quantity')
    .exec()
    .then(docs => {
        //if the user has a bundle, return 200 with the bundle
        if(docs.length > 0){
            res.status(200).json({
                numberOfItems :docs.length,
                bundle: docs.map(doc => {
                    return {
                        _id: doc._id,
                        user: doc.user,
                        product: doc.product,
                        quantity: doc.quantity,
                        request: {
                            type: 'GET',
                            url: site+'bundles/' + doc._id
                        }
                    }
                })
            });
        } else {
            res.status(404).json({ 
                message: 'No bundle found'
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
    );
});


//post request routes
router.post('/', (req, res) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }  
    res.status(201).json({
        message: 'orders were created',
        order: order
    });
});




module.exports = router;