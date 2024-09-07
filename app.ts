import express from "express";
import anilistRouter from "./routers/anilist.js";
import router from "./routers/combinedRoute.js";
import kitsuRouter from "./routers/kitsu.js";

const app = express();

app.use("/anilist", anilistRouter);
app.use("/kitsu", kitsuRouter);
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
}).on("error", (err) => console.log(err));
