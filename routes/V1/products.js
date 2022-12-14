const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../../models/Product');



router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs => {
        console.log(docs);
        if (docs.length >= 0) {
            res.status(200).json(docs);
        }
        else {
            res.status(204).json({
                message: 'No products found'
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        brand:req.body.brand,
        price: req.body.price,
        size: req.body.size,
        category: req.body.category
    })
    product.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'your product has been created',
            createdProduct: product
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });

  
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log("From database", doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message: 'No valid entry found for provided ID'});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps = req.body;
    for (const ops of updateOps) {
        res.status(200).json({
            message: 'Product updated',
            id: id,
            updateOps: updateOps
        });
    }   
});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});






module.exports = router;