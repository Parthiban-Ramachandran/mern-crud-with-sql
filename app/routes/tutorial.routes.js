module.exports = app => {

  const users = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  router.post("/post_user", users.postUser);

  router.get("/get_all_users", users.getAllUsers);

  router.get("/get_user_by_id/:id", users.getUserById);

  router.put("/put_user/:id", users.putUser);

  router.delete("/delete_user_by_id/:id", users.deleteUser);

  app.use('/api/users', router);
};
