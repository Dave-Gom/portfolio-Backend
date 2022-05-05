"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      nickName: {
        type: Sequelize.STRING,
      },
      fullName: {
        type: Sequelize.STRING,
      },
      b_day: {
        type: Sequelize.DATE,
      },
      id_doc: {
        type: Sequelize.STRING,
      },
      tell: {
        type: Sequelize.STRING,
      },
      cell: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      placeOfBirth: {
        type: Sequelize.STRING,
      },
      photo: {
        type: Sequelize.STRING,
      },
      e_mail: {
        type: Sequelize.STRING,
      },
      instagram: {
        type: Sequelize.STRING,
      },
      gitHub: {
        type: Sequelize.STRING,
      },
      linkedIn: {
        type: Sequelize.STRING,
      },
      civil_status: {
        type: Sequelize.STRING,
      },
      ruc: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
