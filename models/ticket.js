module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
        ticket_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    });
    return Ticket;
};












// Prior to me changing it
// ==================================================================

// const Ticket = (sequelize, DataTypes) => {
//     sequelize.define('ticket', {
//             ticket_name: DataTypes.STRING,
//             completed: DataTypes.BOOLEAN,
//         },
//         {
//             freezeTableName: true, // Model tableName will be the same as the model name instead of being pluralized
//         }
//     );
//     return Ticket;
// };

// module.exports = Ticket;
