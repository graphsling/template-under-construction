const environment = process.env.ELEVENTY_ENV;
const isProd = environment === 'prod'
const devUrl = 'http://localhost:8000';
const prodUrl = 'https://fill-me';
const baseUrl = isProd ? prodUrl : devUrl;

export default {
    environment,
    isProd,
    baseUrl
};
