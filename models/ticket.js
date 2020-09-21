module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
        ticket_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    });
    return Ticket;
};