const MediPayment = require("../model/medicinePayment.model");
const {
    getMedicineService,
    getMedicineServiceById,
    postMedicineService,
    deleteMedicineServiceById
} = require("../service/Medicine.service");
const { v4: uuidv4 } = require('uuid');
const SSLCommerzPayment = require("sslcommerz-lts");
module.exports.getMedicine = async (req, res, next) => {
    try {
       
       let category =req.query; 
 
        if(!category.category){
            category ={}
        }
        let queries = {};
        if(req.query.page){
            const {page=0,limit=10} = req.query;
            const skip = parseInt(page)*parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
           }
        const result = await getMedicineService(category,queries);
        res.status(200).json({
            message: "success",
            result: result 
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports.postMedicine = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await postMedicineService(data);
        res.status(200).json({
            message: "success",
            result: result
        })
    }
    catch (error) {
        res.status(500).json({
            error: error
        })
    }
}
module.exports.getMedicineById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await getMedicineServiceById(id);
        res.status(200).json({
            message: "success",
            result: result
        })
    }
    catch (error) {
        res.status(500).json({
            error: error
        })
    }
}
module.exports.deleteMedicineById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await deleteMedicineServiceById(id);
        res.status(200).json({
            message: "success",
            result: result
        })
    }
    catch (error) {
        res.status(500).json({
            error: error
        })
    }
} 


module.exports.medicinePayment = async (req, res, next) => {
    try {
        const data = {
            total_amount: req.body.price,
            currency: 'BDT',
            tran_id: uuidv4(),
            success_url: 'http://localhost:5000/api/v1/success',
            fail_url: 'http://localhost:5000/api/v1/fail',
            cancel_url: 'http://localhost:5000/api/v1/cancel',
            ipn_url: 'http://localhost:5000/api/v1/ipn',
            shipping_method: 'Courier',
            product_name: req.body.category,
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: req.body.name,
            payment: 'pending',
            cus_email: 'customer@example.com',
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: req.body.city,
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: req.body.phone,
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            product_id:req.body.id,
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        const result = await MediPayment(data).save();
        const sslcz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false)
        sslcz.init(data).then(data => {
            res.status(200).json({
                result: data.GatewayPageURL
            })
        });
 
    }
    catch (error) {
        console.log(error.message);
        res.status(200).json({
            error: error.message
        })
    }
}
module.exports.getPaymentMedicine = async (req ,res) =>{
    try{
     const result =  await MediPayment.find({})
     res.status(200).json({
        result: result
    })
    }
     catch (error) {
         console.log(error.message);
         res.status(200).json({
             error: error.message
         })
     }
    }
 
module.exports.updatePaymentMedicine = async (req,res) =>{
   try{
    const {id} = req.params;
    console.log(id);
    const result =  await MediPayment.updateOne({_id:id},{$set:{status:"deliver"}},{runValidators:true})
    return result;
   }
    catch (error) {
        console.log(error.message);
        res.status(200).json({
            error: error.message
        })
    }
   }
