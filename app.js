import express from "express";

import usersRoutes from "./routes/users.js";
import articlesRoutes from "./routes/articles.js";

const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');

app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
