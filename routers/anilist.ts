import express from "express";
import Anilist, { MediaSearchEntry, type AnimeEntry } from "anilist-node";

const router = express.Router();
const anilist = new Anilist();

// Fetch Anime IDs based on a search query
router.get("/search/:query", async (req, res) => {
	const { query } = req.params;
	try {
		const searchResults: Partial<MediaSearchEntry> = await anilist.search(
			"anime",
			query
		);
		res.json(searchResults.media);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Fetch Reviews based on Anime ID
router.get("/reviews/:animeId", async (req, res) => {
	const { animeId } = req.params;
	try {
		const anime = await anilist.media.anime(parseInt(animeId));
		res.json(anime.reviews);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

export default router;
