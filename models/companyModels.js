const db = require("../config/db");

const getAllDataCompany = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM company`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const getMisionCompany = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM mission_company`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const getServiceCompany = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM services_company`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const getTestimonialCompany = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM testimonial`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const getTeamCompany = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM team`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  getAllDataCompany,
  getMisionCompany,
  getServiceCompany,
  getTestimonialCompany,
  getTeamCompany,
};
