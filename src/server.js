const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const { pageLanding, pageStudy, pageTeach, saveTeach } = require('./pages');
let path = require('path');

nunjucks.configure('src/views', { express: server, noCache: true });

server

    .use(express.urlencoded({extended: true}))

    .use("/public", express.static(path.join(__dirname, "../public")))

    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/teach", pageTeach)
    .post("/save", saveTeach)

    .listen(5500);
