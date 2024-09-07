# Anime Review Aggregator Backend

This backend service fetches and aggregates anime reviews from AniList and Kitsu using their official npm libraries. The service provides multiple routes for searching and fetching reviews based on anime titles and IDs. A combined route is available to collectively fetch data from both platforms and streamline the response to the frontend.

## Features

-   Fetch anime information and reviews from AniList and Kitsu using their npm libraries.
-   Combined route to search and retrieve reviews from multiple platforms in one request.
-   Extendable architecture for adding more platforms in the future (e.g., MyAnimeList, Reddit).

## Libraries Used

-   **AniList**: [anilist-node](https://www.npmjs.com/package/anilist-node)
-   **Kitsu**: [kitsu](https://www.npmjs.com/package/kitsu)

## Routes Overview

### AniList Routes (using `anilist-node`)

1. **Search Anime**

    - **Endpoint**: `/anilist/search/:anime-name`
    - **Method**: `GET`
    - **Description**: Searches for an anime on AniList by name.
    - **Example**: `/anilist/search/naruto`

2. **Get Reviews**
    - **Endpoint**: `/anilist/reviews/:anime-id`
    - **Method**: `GET`
    - **Description**: Fetches reviews for a specific anime from AniList using the anime's ID.
    - **Example**: `/anilist/reviews/1234`

### Kitsu Routes (using `kitsu`)

1. **Search Anime**

    - **Endpoint**: `/kitsu/search/:anime-name`
    - **Method**: `GET`
    - **Description**: Searches for an anime on Kitsu by name.
    - **Example**: `/kitsu/search/one-piece`

2. **Get Reviews**
    - **Endpoint**: `/kitsu/reviews/:anime-id`
    - **Method**: `GET`
    - **Description**: Fetches reviews for a specific anime from Kitsu using the anime's ID.
    - **Example**: `/kitsu/reviews/one-piece`

### Combined Routes

1. **Combined Search**

    - **Endpoint**: `/search/:anime-name`
    - **Method**: `GET`
    - **Description**: Searches for an anime on both AniList and Kitsu collectively and merges the results into a single response.
    - **Example**: `/search/attack-on-titan`

2. **Combined Reviews**
    - **Endpoint**: `/reviews/:site/:anime-id`
    - **Method**: `GET`
    - **Description**: Fetches reviews dynamically from either AniList or Kitsu based on the platform (`site`) and the anime's ID.
    - **Example**: `/reviews/anilist/1234`

### Unavailable Features

Currently, MyAnimeList and Reddit routes are not implemented due to technical difficulties with obtaining access tokens. These routes will be added in future updates.

## Prerequisites

-   **Node.js**: Ensure you have Node.js installed.
-   **npm**: Comes with Node.js, used for package management.

## Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/vincyy24/anime-review-backend.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd anime-review-backend
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the server**:

    ```bash
    npm start
    ```

5. **Server will run on**:
    - `http://localhost:3000`

## API Usage

### Search and Reviews for AniList

-   **Anime Search**: `/anilist/search/:anime-name`
-   **Anime Reviews**: `/anilist/reviews/:anime-id`

### Search and Reviews for Kitsu

-   **Anime Search**: `/kitsu/search/:anime-name`
-   **Anime Reviews**: `/kitsu/reviews/:anime-id`

### Combined API

-   **Combined Search**: `/search/:anime-name`
-   **Combined Reviews**: `/reviews/:site/:anime-id`

## Contribution

Feel free to submit issues or pull requests if you'd like to contribute to this project. We're happy to accept any suggestions or improvements.

## License

This project is licensed under the MIT License.
