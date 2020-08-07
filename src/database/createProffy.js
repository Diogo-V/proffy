module.exports = async function (db, { proffyValue, classValue, classScheduleValues }) {

    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `);

    const proffyId = insertedProffy.lastID;

    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject, 
            cost,
            proffyId
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffyId}"
        );
    `);

    const classId = insertedClass.id;

    const insertedAllClassesScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO classSchedule (
                classId,
                weekday,
                timeFrom,
                timeTo
            ) VALUES (
                "${classId}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.timeFrom}",
                "${classScheduleValue.timeTo}"
            );
        `)
    });

    await Promise.all(insertedAllClassesScheduleValues)

};
