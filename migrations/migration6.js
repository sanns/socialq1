const db = require('../models');

module.exports = {
    up: (queryInterface, DataTypes) => {
        console.log(db);
        return queryInterface.addColumn(db.bot_reports.tableName, 'strategy', DataTypes.INTEGER);
    },
    down: () => {}
};
