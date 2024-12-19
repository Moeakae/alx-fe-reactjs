import fetchGitHubData from './services/githubService';
const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_TOKEN = 'your_github_token';
    return respond.data;
const API_KEY = process.env.API_KEY;
     async function makeRequest(url) {

               const headers = {
                    'Autherization': 'Bearer ${GITHUB_TOKEN}',
                    'Content-Type': 'application/json',
                };
                try {
                    const response = await fetch(url, { headers }); 
                if (!response.ok) {
                    throw new Error('GitHub API error: ${response.statusText}');
                }
            
            return await response.json();
        }catch (error) {
            console.error(error);
            return null;
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
            return await makeRequest(url);
        } catch (error) {
            console.error('Error posting data to ${endpoint}:', error);
            throw new Error('API request failed: ${error.response ? error.respose.data :error.message}')
        }
     }
     async function complexApiWorkFlow() {
        
            const initialData = await fetchData('/some-endpoint', { queryParams: 'value' });
            const transformedData = transformData(initialData);
            const result = await postData('/another-endpoint', transformedData);
            return await makeRequest(url);
            if (repos) { 
                console.log(repos);
        } else { 
            console.error('Error in complex API workflow:', error);
            throw error;
        
}
} 
 fetchGitHubData();