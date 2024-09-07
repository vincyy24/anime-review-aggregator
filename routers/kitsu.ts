import express from "express";
import Kitsu from "kitsu";

const router = express.Router();
const api = new Kitsu();

// Fetch Anime IDs based on a search query
router.get("/search/:query", async (req, res) => {
	const { query } = req.params;
	try {
		const response = await api.get("anime", {
			params: {
				filter: { text: query },
				page: { limit: 10 },
			},
		});
		res.json(response.data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Fetch Reviews based on Anime ID
router.get("/reviews/:animeId", async (req, res) => {
	const { animeId } = req.params;
	try {
		const response = await api.get(`anime/${animeId}/reviews`);
		res.json(response);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

export default router;
