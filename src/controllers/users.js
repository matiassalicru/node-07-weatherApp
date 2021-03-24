const express = require("express");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getAllUsers = (req, res) => {
  const users = [
    {
      id: 1,
      name: "Matías",
    },
    {
      id: 2,
      name: "Fernando",
    },
  ];

  res.json(users);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const createUser = (req, res) => {
  const user = req.body;
  user.id = 333;

  const result = {
    message: "User created",
    user,
  };
  res.status(201).json(result);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const updateUser = (req, res) => {
  const user = req.body;
  const { id } = req.params;

  user.id = id;

  const result = {
    message: "User updated",
    user,
  };
  res.status(200).json(result);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const updatePartialUser = (req, res) => {
  const user = req.body;
  const { id } = req.params;

  user.id = id;

  const result = {
    message: "User updated with Patch",
    user,
  };
  res.status(200).json(result);
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const deleteUser = (req, res) => {
  const { id } = req.params;

  const result = {
    message: `User with id: ${id} deleted`,
  };

  res.json(result);
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  updatePartialUser,
  deleteUser,
};
