var express =require('express');
var router = express.Router();
const item = require('../model/shopingItem');

router.get('/items', (req,res, next) =>{
	item.find(function(err,items){
		if(err)
		{
			res.json(err);
		}
		else
		{
			res.json(items);
		}
	})

});
router.post('/item', (req,res, next) =>{
	let newShopingItem = new item({
		itemName:req.body.itemName,
		itemQuantity:req.body.itemQuantity,
		itemBought:req.body.itemBought
	});
	newShopingItem.save((err, item)=>{
		if(err){
			res.json(err);
		}
		else
		{
			res.json({msg:'item added success'});
		}
	});
});
router.put('/item/:id', (req,res, next) =>{
	item.findOneAndUpdate({ _id:req.params.id},
	{
     $set:{
     	itemName:req.body.itemName,
		itemQuantity:req.body.itemQuantity,
		itemBought:req.body.itemBought
     }
	},
	function(err, result){
		if(err){
			res.json(err);
		}
		else
		{
			res.json(result);
		}
	})

});
router.delete('/item/:id', (req,res, next) =>{
	item.remove({ _id: req.params.id}, function(err, result){
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}
	});
});
module.exports= router;