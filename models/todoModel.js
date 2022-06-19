const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const todoList = new model("mytodoList", todoSchema);

module.exports = todoList;
