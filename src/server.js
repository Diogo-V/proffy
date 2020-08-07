const proffys = [
    {
        name: 'Diogo Venancio',
        avatar: 'https://avatars3.githubusercontent.com/u/50443643?s=460&u=e23e156a5919802f0fbd8d402d267ff7aa72b571&v=4',
        whatsapp: '89222991',
        bio: 'I consider myself an easy-going and motivated person that works very nicely in a team.\n' +
             'I have the aspiration of becoming one of the best at what I do and, to reach that goal,\n' +
             'I work every day in improving not only myself, but also the people around me.',
        subject: 'Maths',
        cost: '20',
        weekday: [0],
        timeFrom: [720],
        timeTo: [1220]
    },

    {
        name: 'Rui Maciel',
        avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQGScRO5HPAeXg/profile-displayphoto-shrink_200_200/0?e=' +
                '1602115200&v=beta&t=59k7sMJT0EaUWvXSgnT3KbFmzrLsUjOwOajId2yyewU',
        whatsapp: '23894923',
        bio: 'I consider myself an easy-going and motivated person that works very nicely in a team.\n' +
             'I have the aspiration of becoming one of the best at what I do and, to reach that goal,\n' +
             'I work every day in improving not only myself, but also the people around me.',
        subject: 'Maths',
        cost: '30',
        weekday: [1],
        timeFrom: [720],
        timeTo: [1220]
    }

];

const express = require('express');
const server = express();
let path = require('path');

server.use("/public", express.static(path.join(__dirname, "../public")))

    .get("/", (req, res) => {
        return res.sendFile(__dirname + "/views/index.html")
    })

    .get("/study", (req, res) => {
        return res.sendFile(__dirname + "/views/study.html")
    })

    .get("/teach", (req, res) => {
        return res.sendFile(__dirname + "/views/teach.html")
    })

    .listen(5500);
