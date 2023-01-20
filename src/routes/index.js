const EXPRESS = require("express");
const USER_ROUTES = require("./user");

const ROUTES_APP = (APP) => {
  const ROUTES = EXPRESS.Router();
  /* POST: http://localhost:3000/api/v1/customers/user */
  /* GET: http://localhost:3000/api/v1/customers/ */
  APP.use("/api/v1", ROUTES);
  ROUTES.use("/customers", USER_ROUTES);
};

module.exports = ROUTES_APP;
