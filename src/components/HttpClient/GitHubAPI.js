import HttpClient from './HttpClientAPI'

export default class GitHubAPI {
    getSearchUsers = function(searchString) {
        HttpClient.configure().then(async (api) => {
            let strURL = "/search/users?q=" + searchString;
            const response = await api.get('strURL')
          
            // Display something beautiful with `response.data` ;)
          })
    }
}