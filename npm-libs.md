### **MyAnimeList**

-   **Library**: `mal-scraper`

    -   **Description**: This library allows you to scrape MyAnimeList data without using the official API. It’s useful if you want to avoid the complexities of OAuth 2.0.
    -   **Installation**:
        ```bash
        npm install mal-scraper
        ```
    -   **Usage**:

        ```javascript
        import malScraper from "mal-scraper";

        malScraper
        	.getInfoFromName("Naruto")
        	.then((data) => console.log(data))
        	.catch((err) => console.error(err));
        ```

### **AniList**

-   **Library**: `anilist-node`

    -   **Description**: This is a Node.js wrapper for AniList’s GraphQL API, making it easier to interact with AniList data.
    -   **Installation**:
        ```bash
        npm install anilist-node
        ```
    -   **Usage**:

        ```javascript
        import Anilist from "anilist-node";

        const anilist = new Anilist();

        anilist.media
        	.anime(1) // Fetch anime by ID
        	.then((data) => console.log(data))
        	.catch((err) => console.error(err));
        ```

### **Kitsu**

-   **Library**: `kitsu`

    -   **Description**: This is an official client library for the Kitsu API, allowing easy access to Kitsu's endpoints.
    -   **Installation**:
        ```bash
        npm install kitsu
        ```
    -   **Usage**:

        ```javascript
        import Kitsu from "kitsu";

        const api = new Kitsu();

        api.get("anime", {
        	filter: { text: "Naruto" },
        })
        	.then((response) => console.log(response))
        	.catch((error) => console.error(error));
        ```

### **Reddit**

-   **Library**: `snoowrap`

    -   **Description**: A well-maintained wrapper for the Reddit API, making it easier to interact with Reddit’s endpoints.
    -   **Installation**:
        ```bash
        npm install snoowrap
        ```
    -   **Usage**:

        ```javascript
        import Snoowrap from "snoowrap";

        const r = new Snoowrap({
        	userAgent: "my-app",
        	clientId: "YOUR_CLIENT_ID",
        	clientSecret: "YOUR_CLIENT_SECRET",
        	refreshToken: "YOUR_REFRESH_TOKEN",
        });

        r.getSubreddit("anime")
        	.search({ query: "Naruto", sort: "new" })
        	.then((posts) => console.log(posts))
        	.catch((error) => console.error(error));
        ```

> ### **Summary of npm Libraries**:
>
> -   **MyAnimeList**: `mal-scraper` (unofficial)
> -   **AniList**: `anilist-node`
> -   **Kitsu**: `kitsu`
> -   **Reddit**: `snoowrap`

> These libraries simplify API interaction and can handle authentication, requests, and responses, so you don't need to deal with raw HTTP requests manually.
