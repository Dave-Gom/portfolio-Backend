const db = require("../../models");
const user = db.User;
const op = db.sequelize.op;

exports.findAll = (req, res) => {
  const title = req.query.title;
  //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  user
    .findAll(/* { where: condition } */)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
