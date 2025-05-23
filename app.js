import express from "express"
import fs from "fs"


const app = express()
const port = 3000

app.use(express.static("public"));

app.get("/", (req, res) => {
    const resData = {
        data: "Server del mio blog",
    }

    res.json(resData)
})

app.get("/bacheca", (req, res) => {
    const dataJson = fs.readFileSync("./data/content.json")
    const posts = JSON.parse(dataJson)

    const resData = {
        data: posts,
        success: true,
        count: posts.length
    }

    res.json(resData)
})

app.listen(port, () => {
    console.log("Server in ascolto");
});


// const post = [
//     {
//         id: 1,
//         title: "Fine di un viaggio: il buco nero che rimane",
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         img: "./public/img/20250421212343.png",
//         tags: ["#baldursgate", "#viaggio", "#dnd", "#gdr", "#videogiochi"]
//     },
//     {
//         id: 2,
//         title: "Post-game: voglia di uscire, esplorare e conoscere il mondo che ci circonda",
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         img: "./public/img/Download-Zelda-Backgrounds.jpg",
//         tags: ["#zelda", "#esplorare", "#scoperta", "#fuoricasa", "#videogiochi"]
//     },
//     {
//         id: 3,
//         title: "Apatia videoludica: bisogno di cambiamento o semplice stop?",
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         img: "./public/img/Cura la tua passione.png",
//         tags: ["#emozioni", "#apatia", "#cambiamento", "#stimoli", "#videogiochi"]
//     },
//     {
//         id: 4,
//         title: "Quarta parete: rompere i confini di separazione tra utente e media",
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         img: "./public/img/quarta-parete.png",
//         tags: ["#quartaparete", "#oltrelimite", "#media", "#utente", "#comunicazione"]
//     },
//     {
//         id: 5,
//         title: "Massima libertà: il complesso sviluppo dietro gli immersive-sim",
//         content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         img: "./public/img/88599.jpg",
//         tags: ["#immersivesim", "#sviluppo", "#codice", "#libertà", "#videogiochi"]
//     }
// ]

