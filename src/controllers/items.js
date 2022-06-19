let items = require("../Items");

const getItems = (request, reply) => {
  reply.send(items);
};

const getItem = (request, reply) => {
  const { id } = request.params;
  const todo = items.find((item) => item.id === id);
  reply.send(todo);
};

const postItem = (request, reply) => {
  const { name, description } = request.body;
  const item = {
    id: String(items.length + 1),
    name,
    description,
  };
  items.push(item);
  reply.code(201).send(item);
};

const updatedItem = (request, reply) => {
  const { id } = request.params;
  const { name, description } = request.body;
  const item = items.find((item) => item.id === id);
  item.name = name;
  item.description = description;
  reply.send(item);
};

const deleteItem = (request, reply) => {
  const { id } = request.params;
  items = items.filter((item) => item.id !== id);
  reply.send(`Item with ${id} got deleted!`);
};

module.exports = {
  getItems,
  getItem,
  postItem,
  updatedItem,
  deleteItem,
};
