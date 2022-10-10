const express = require("express");

const authRoutes = require("./authRoutes");
const companyRoutes = require("./companyRoutes");

const Router = express.Router();

Router.use("/auth", authRoutes);
Router.use("/company", companyRoutes);

module.exports = Router;
