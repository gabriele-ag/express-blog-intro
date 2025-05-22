import express from "express"
import fs from "fs"


const app = express()
const port = 3000


app.get("/", (req, res) => {
    const resData = {
        data: "Server del mio blog"
    }

    res.json(resData)
})

const post = [{
    title: "Fine di un viaggio: il buco nero che rimane",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "./public/20250421212343.png",
    tags: ["#baldursgate", "viaggio", "dnd", "videogiochi", "gdr"]
}
]

app.listen(port, () => {
    console.log("Server in ascolto");
});
