import express from "express";
import cors from "cors";

import auth from "./routes/auth.js";
import users from "./routes/users.js";
import animals from "./routes/animals.js";
import auctions from "./routes/auctions.js";
import {init} from "./data.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/animals", animals);
app.use("/api/auctions", auctions);

app.get("/", (req, res) => {
    console.log(req);
    res.send('Hello World!')
    res.json({msg: "hello world"});
});

init();

app.listen(port, () => {
    console.log("[SYSTEM]: Server is running on port " + port + "...");
});

