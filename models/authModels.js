const db = require("../config/db");

const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM admin WHERE email = $1`,
      [email],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const addUser = (props) => {
  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO admin (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
      [props.name, props.email, props.password],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = {
  getUserByEmail,
  addUser,
};
