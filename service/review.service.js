const Review = require("../model/review.model")

module.exports.getReviewService = async () => {
    const result = await Review.find().sort({ updatedAt: -1 })
    return result;
}
module.exports.postReviewService = async (data) => {
    // const email = await Review.findOne({ email: data.email });
    // let result;
    // if (!email) {
        result = await Review(data).save();
    // }
    return result;
}
module.exports.updateReviewService = async (data, id) => {
       const result = await Review.updateOne({ _id: id }, data, {
        });
    return result;
}
module.exports.deleteReviewService = async (data,id) => {
    const {email }= await Review.findOne({_id:id});
    let result
    if(data.email===email){
        result = await Review.deleteOne({ _id: id });
    }
    return result;
}