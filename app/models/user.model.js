module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    nome: {
      type: Sequelize.STRING
    },
    idade: {
      type: Sequelize.INTEGER
    },
    sexo: {
      type: Sequelize.INTEGER
    },
    cidade: {
      type: Sequelize.STRING
    },
    uf: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.DATE
    },
    updated_at: {
      type: Sequelize.DATE
    }
  });

  return User;
};