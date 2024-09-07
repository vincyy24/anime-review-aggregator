import axios, { type AxiosResponse } from "axios";

const baseUrl = "http://localhost:3000";

export const Anilist = {
	search: axios.create({ baseURL: `${baseUrl}/anilist/search` }),
	reviews: axios.create({ baseURL: `${baseUrl}/anilist/reviews` }),
};
export const Kitsu = {
	search: axios.create({ baseURL: `${baseUrl}/kitsu/search` }),
	reviews: axios.create({ baseURL: `${baseUrl}/kitsu/reviews` }),
};

export interface ResponseObject {
	data: AxiosResponse | null;
	error: Error | null;
}