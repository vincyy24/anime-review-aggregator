import express from "express";
import { Anilist, Kitsu, type ResponseObject } from "../apiClient";

const router = express.Router();

// Handle Search Request Combinedly
router.get("/search/:query", async (req, res) => {
	const { query } = req.params;
	let code: number, response: { anilist: any; kitsu: any; error: any };
	try {
		// Search on Anilist & Kitsu together for the anime in query
		const [anilistSearch, kitsuSearch] = await Promise.all([
			Anilist.search(`/${query}`),
			Kitsu.search(`/${query}`),
		]);

		// Set search data to respective keys
		code = 200;
		response = {
			anilist: anilistSearch.data,
			kitsu: kitsuSearch.data,
			error: null,
		};
	} catch (err) {
		console.log(err);
		code = 500;
		response = {
			anilist: null,
			kitsu: null,
			error: err.message,
		};
	}
	res.status(code).json(response);
});

// Handle Review Request Dynamically
router.get("/reviews/:site/:id", async (req, res) => {
	const { id, site } = req.params;
	const reviews: ResponseObject = { data: null, error: null };
	let code: number, response: { data: any; error: any };

	try {
		switch (site) {
			case "anilist":
				reviews.data = (await Anilist.reviews(`/${id}`)).data;
				break;
			case "kitsu":
				reviews.data = (await Kitsu.reviews(`/${id}`)).data;
				break;
			default:
				throw Error("Bad request! No data for given key!");
		}
		// Respond with review data
		code = 200;
		response = {
			data: reviews.data?.data ?? reviews.data,
			error: null,
		};
	} catch (err) {
		console.log(err);
		code = 500;
		response = {
			data: null,
			error: err.message,
		};
	}
	res.status(code).json(response);
});

export default router;
