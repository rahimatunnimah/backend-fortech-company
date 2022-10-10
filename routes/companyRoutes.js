const Router = require("express").Router();
const controller = require("../controllers/companyControllers");

Router.get("/", controller.getAllDataCompany)
  .get("/mission", controller.getMissionCompany)
  .get("/service", controller.getServiceCompany)
  .get("/testimonial", controller.getTestimonialCompany)
  .get("/team", controller.getTeamCompany);

module.exports = Router;
