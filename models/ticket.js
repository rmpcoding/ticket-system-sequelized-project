const Ticket = (sequelize, DataTypes) => {
    sequelize.define(
        'ticket',
        {
            ticket_name: DataTypes.STRING,
            completed: DataTypes.BOOLEAN,
        },
        {
            freezeTableName: true, // Model tableName will be the same as the model name instead of being pluralized
        }
    );
    return Ticket;
};

module.exports = Ticket;