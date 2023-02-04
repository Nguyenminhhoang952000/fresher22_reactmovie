import axiosClient from './axiosClient';
import apiConfig from './apiConfig';
export const category = {
    movie: 'movie',
    tv: 'tv',
};

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
};

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
};

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = `movie/${movieType[type]}?api_key=${apiConfig.apiKey}`;
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = `tv/${tvType[type]}?api_key=${apiConfig.apiKey}`;
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = `${category[cate]}/${id}/videos?api_key=${apiConfig.apiKey}`;
        return axiosClient.get(url, { params: {} });
    },
    search: (cate, params) => {
        const url = `search/'${category[cate]}?api_key=${apiConfig.apiKey}`;
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = `${category[cate]}/${id}?api_key=${apiConfig.apiKey}`;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, { params: {} });
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, { params: {} });
    },
    trending: (cate, time) => {
        const url = `trending/${category[cate]}/${time}?api_key=${apiConfig.apiKey}`;
        return axiosClient.get(url, { params: {} });
    },
    LinkOverViewMovie: (id, title) => {
        return `${id}-${title?.replace(':', '')}`?.replace(/\s/g, '-').toLowerCase();
    },
};

export default tmdbApi;
