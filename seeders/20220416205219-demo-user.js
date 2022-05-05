"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "David",
        lastName: "Gomez",
        nickname: "Dave",
        fullname: "David Emmanuel Gómez Arca",
        b_day: new Date("1999-02-16"),
        id_doc: "6660354",
        tell: "",
        cell: "+595 972422806",
        address: "San roque Gonzalez 310 c/ Maria Auxiliadora - Isla Valle",
        city: "Aregua",
        country: "Paraguay",
        placeOfBirth: "Asuncion",
        photo: "",
        e_mail: "davegomez426@gmail.com",
        instagram: "https://www.instagram.com/davegomezarca/",
        gitHub: "https://github.com/Dave-Gom",
        linkedIn: "https://www.linkedin.com/in/dave-gomez-54b22a1b7/",
        civil_status: "Soltero",
        ruc: "6660354",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
