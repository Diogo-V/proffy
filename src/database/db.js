const database = require('sqlite-async');

function execute(db) {
    return db.exec(
        'CREATE TABLE IF NOT EXISTS proffys (' +
            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'name TEXT,' +
            'avatar TEXT,' +
            'whatsapp TEXT,' +
            'bio TEXT);' +
        ' ' +
        'CREATE TABLE IF NOT EXISTS classes (' +
            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'subject INTEGER,' +
            'cost TEXT,' +
            'proffyId INTEGER);' +
        ' ' +
        'CREATE TABLE IF NOT EXISTS classSchedule (' +
            'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'classId INTEGER,' +
            'weekday INTEGER,' +
            'timeFrom INTEGER,' +
            'timeTo INTEGER);'
    );
}

module.exports = database.open(__dirname + '/database.sqlite').then(execute);
