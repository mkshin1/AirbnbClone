// // const express = require("express");
// import express from "express";
// // const cors = require("cors");
// import cors from "cors";
// // const knex = require("knex");
// // import knex from "knex";
// // require("dotenv").config();
// import "dotenv/config";
// import { pool } from "./database/db.js";

// const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// // CORS implemented so that we don't get errors when trying to access the server from a different server location
// app.use(cors());

// app.get("/", (req, res) => {
//   res.json({ message: "server is running. nothing much here" });
// });

// app.post("/create/user", async (req, res) => {
//   try {
//     // await
//     console.log(req.body);
//     const { first_name, last_name, email } = req.body;
//     const newPerson = await pool.query(
//       "INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *",
//       [first_name, last_name, email]
//     );
//     res.json(newPerson.rows[0]);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// app.get("/users", async (req, res) => {
//   try {
//     const getAllUsers = await pool.query("SELECT * FROM users");
//     res
//       .status(200)
//       .json({ status: "success", data: { all_users: getAllUsers.rows } });
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// app.get("/user/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     // const { first_name, last_name, email } = req.body;
//     const person = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
//     res.json(person.rows[0]);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.put("/user/:id", async (req, res) => {
//   try {
//     const { id } = req.params; //
//     const { first_name, last_name, email } = req.body; // set
//     const updateUser = await pool.query(
//       "UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4",
//       [first_name, last_name, email, id]
//     );
//     res
//       .status(200)
//       .json({ status: "ok", message: "user was sucessfully updated" });
//     // res.json(updateUser.rows[0]);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// app.delete("/user/:id", async (req, res) => {
//   const { id } = req.params;
//   const deleteUser = await pool.query("DELETE FROM users WHERE id = $1", [id]);

//   res.status(200).json({
//     status: "ok",
//     message: "user has been deleted",
//     data: deleteUser.rows[0],
//   });
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () =>
//   console.log(`Server running on port ${port}, http://localhost:${port}`)
// );
