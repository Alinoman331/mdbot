const { DATABASE } = require('../lib/database');
const { DataTypes } = require('sequelize');
const config = require('../config');

const AntiDelDB = DATABASE.define('AntiDelete', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: 1
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: config.ANTI_DELETE === true || config.ANTI_DELETE === "true"
    }
}, {
    tableName: 'antidelete',
    timestamps: false
});

let init = false;

async function initializeAntiDeleteSettings() {
    if (init) return;

    await AntiDelDB.sync();

    await AntiDelDB.findOrCreate({
        where: { id: 1 },
        defaults: {
            status: config.ANTI_DELETE === true || config.ANTI_DELETE === "true"
        }
    });

    init = true;
}

async function setAnti(status) {
    await initializeAntiDeleteSettings();
    await AntiDelDB.update({ status }, { where: { id: 1 } });
    return true;
}

async function getAnti() {
    await initializeAntiDeleteSettings();
    const data = await AntiDelDB.findByPk(1);
    return data ? data.status : config.ANTI_DELETE;
}

module.exports = {
    AntiDelDB,
    initializeAntiDeleteSettings,
    setAnti,
    getAnti
};
