const model = require("../models/companyModels");

const getAllDataCompany = async (req, res) => {
  try {
    const getData = await model.getAllDataCompany();
    if (getData.rowCount > 0) {
      res.send({ data: getData.rows });
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const getMissionCompany = async (req, res) => {
  try {
    const getData = await model.getMissionCompany();
    if (getData.rowCount > 0) {
      res.send({ data: getData.rows });
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const getServiceCompany = async (req, res) => {
  try {
    const getData = await model.getServiceCompany();
    if (getData.rowCount > 0) {
      res.send({ data: getData.rows });
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const getTestimonialCompany = async (req, res) => {
  try {
    const getData = await model.getTestimonialCompany();
    if (getData.rowCount > 0) {
      res.send({ data: getData.rows });
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const getTeamCompany = async (req, res) => {
  try {
    const getData = await model.getTeamCompany();
    if (getData.rowCount > 0) {
      res.send({ data: getData.rows });
    } else {
      res.status(404).send("Data not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  getAllDataCompany,
  getMissionCompany,
  getServiceCompany,
  getTestimonialCompany,
  getTeamCompany,
};
