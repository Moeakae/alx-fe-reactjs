import fetchGitHubData from './services/githubService',

const axios = require('axios');
const qs = require('qs')
const { processData, transformData } = require('./utils');
    const API_BASE_ = 'https://api.github.com/users/${username}';
    return respond.data;
const API_KEY = process.env.API_KEY;
     async function fetchUserData(endpoint, params = {}) {
        try {
            const response = await axios.get('${API_BASE_URL}${endpoint}', {
                headers: {
                    'Autherization': 'Bearer ${API_KEY}',
                },
                params: params,
            }),
            return response.data;
        }catch (error) {
            console.error('Error fetching data from ${endpoint}:', error);
            throw new Error('API request failed: ${error.response ? error.response.data : error.message}');
        }
     }
     async function postData(endpoint, data) {
        try {
            const response = await axios.post('${API_BASE_URL} ${endpoint}', data, {
                headers: {
                    'Authorization': 'Bearer ${API_KEY}',
                    'Content-Type': 'applicition/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error posting data to ${endpoint}:', error);
            throw new Error('API request failed: ${error.response ? error.respose.data :error.message}')
        }
     }
     async function complexApiWorkFlow() {
        try {
            const initialData = await fetchData('/some-endpoint', { queryParams: 'value' });
            const transformedData = transformData(initialData);
            const result = await postData('/another-endpoint', transformedData);
            return result;
        } catch (error) {
            console.error('Error in complex API workflow:', error);
            throw error;
        }
     }
module.exports = {
    fetchData,
    postData,
    complexApiWorkFlow,
};