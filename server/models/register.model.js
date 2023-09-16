module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("register", {
    user: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      unique: true, // Add this line to make the email field unique
      allowNull: false // Optional: to make it required
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
