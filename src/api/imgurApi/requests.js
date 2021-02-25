import qs from 'qs';

const URL = "https://api.imgur.com";

export default {
    login() {
        const queryString = {
            client_id: process.env.VUE_APP_CLIENT_ID,
            response_type: "token"
        };

        console.log(queryString);

        return window.location = `${URL}/oauth2/authorize?${qs.stringify(queryString)}`;

    },
};

