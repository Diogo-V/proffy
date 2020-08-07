const database = require('./db');
const createProffy = require('./createProffy');

database.then(async (db) => {

    let proffyValue = {
        name: 'Francisco Ferreira',
        avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQEGfHHenpmqbw/profile-displayphoto-shrink_200_200/0?e' +
                '=1602115200&v=beta&t=8kihK-4UbupaeepIB2Q3sgnRH3hqN06i6Yu-4LXpMDw',
        whatsapp: '8435983593',
        bio: 'Physical education instructor and a good buddy'
    };

    let classValue = {
        subject: 5,
        cost: '50'
    };

    let classScheduleValues = [
        {
            weekday: 1,
            timeFrom: 720,
            timeTo: 1500
        },
        {
            weekday: 0,
            timeFrom: 520,
            timeTo: 1220
        }
    ];

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    const selectProffys = await db.all("SELECT * FROM proffys");
    console.log(selectProffys);

});
