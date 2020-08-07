const database = require('./database/db');

const { subjects, weekdays, getSubject, convertTimeToMinutes } = require('./utils/format');

function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {

    const filters = req.query;

    if( ! filters.subject || ! filters.weekday || ! filters.time) {
        return res.render("study.html", {filters, subjects, weekdays})
    }

    const totalMinutes = convertTimeToMinutes(filters.time);

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffyId = proffyId)
        WHERE EXISTS(
            SELECT classSchedule.*
            FROM classSchedule
            WHERE classSchedule.classId = classes.id
            AND classSchedule.weekday = ${filters.weekday}
            AND classSchedule.timeFrom <= ${totalMinutes}
            AND classSchedule.timeTo > ${totalMinutes}
        )
        AND classes.subject == '${filters.subject}'
    `;

    try {

        const db = await database;
        const proffys = await db.all(query);

        proffys.map((proffy) => {
            proffy.subject = getSubject(proffy.subject)
        });

        return res.render('study.html', {proffys, subjects, filters, weekdays})

    } catch (error) {

        console.log(error);

    }

}

function pageTeach(req, res) {
    return res.render("teach.html", {subjects, weekdays})
}

async function saveTeach(req, res) {

    const createProffy = require('./database/createProffy');

    const proffyValue = {
        name: req.body.name,
        avatar: req.body.avatar,
        whatsapp: req.body.whatsapp,
        bio: req.body.bio
    };

    const classValue = {
        subject: req.body.subject,
        cost: req.body.cost
    };

    const classScheduleValues = req.body.weekday.map((weekday, index) => {
        return {
            weekday: weekday,
            timeFrom: convertTimeToMinutes(req.body.timeFrom[index]),
            timeTo: convertTimeToMinutes(req.body.timeTo[index])
        }
    });

    try {

        const db = await database;
        await createProffy(db, {proffyValue, classValue, classScheduleValues});

        let queryString = "?subject=" + req.body.subject;
        queryString += "?weekday=" + req.body.weekday[0];
        queryString += "?time=" + req.body.timeFrom[0];

        return res.redirect("/study" + queryString)

    } catch (error) {

        console.log(error);

    }

}

module.exports = { pageLanding, pageStudy, pageTeach, saveTeach };
