const {
   postReviewService,
   getReviewService,
   deleteReviewService, updateReviewService
} = require("../service/review.service")

module.exports.getReview = async (req, res, next) => {
   try {
      const result = await getReviewService();

      res.status(200).json({
         message: "there is an error",
         data: result
      })
   } catch (error) {
      res.status(200).json({
         message: error.message,
      })
   }
}

// post review controller 
module.exports.postReview = async (req, res, next) => {
   try {
      if (!req.body.rating || !req.body.comment) {
         return res.status(200).json({
            error: "there is an error",
         })
      }
      const data = { ...req.body };
      console.log(data)
      const result = await postReviewService(data);
      if (!result) {
         return res.status(200).json({
            error: "not use more than two time",
         })
      }
      res.status(200).json({
         message: "there is an error",
         data: result
      })
   } catch (error) {
      res.status(200).json({
         message: error.message,
      })
   }
}

module.exports.updateReview = async (req, res, next) => {
   try {
      if (req.user?.email !== req.body.email) {
         return res.status(400).json({
            message: "this is not valid ur id to update this field"
         })
      }
      const result = await updateReviewService(req.body, req.params.id);
      res.status(200).json({
         message: "there is an error",
         data: result
      })
   } catch (error) {
      res.status(200).json({
         message: error.message,
      })
   }
}

module.exports.deleteReview = async (req, res, next) => {
   try {
      const result = await deleteReviewService(req.user, req.params.id);
      res.status(200).json({
         message: "there is an error",
         data: result
      })
   } catch (error) {
      res.status(200).json({
         message: error.message,
      })
   }
}