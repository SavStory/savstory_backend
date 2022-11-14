import express from "express";
import { User } from "../model/index";
import { expressjwt } from "express-jwt";
const route = express.Router();

// login user
route.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      error: "username or password should not be empty",
    });
  }

  console.log(req.body);
  res.json({
    message: "user successfully logged",
  });
});

// register user
route.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      error: "username or password should not be empty",
    });
  }

  const existingUser = await User.findOne({ username: req.body.username });

  if (existingUser) {
    res.status(200).json({
      message: "",
    });
  }
});

route.get("/:user_id", () => {});

export default route;
