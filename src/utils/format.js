const subjects = [
    "Arts",
    "Biology",
    "Science",
    "Physical education",
    "Physics",
    "Geography",
    "History",
    "Maths",
    "Portuguese",
    "Chemistry"
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition]
}

function convertTimeToMinutes(time) {
    const [hours, minutes, type] = time.split(':');
    let totalMinutes = Number((hours * 60) + minutes);
    if (type === 'PM') {
        return totalMinutes + 720
    } else {
        return totalMinutes
    }
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertTimeToMinutes
};
