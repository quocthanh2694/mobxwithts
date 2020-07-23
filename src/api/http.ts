import { localAppStorageHelper } from '../helpers/localAppStorageHelper';
// import { appRoutes } from '../navigators/appRoutes';
// import I18n from 'i18n-js';
// import { toastHelper } from '../helpers/toastHelper';
// import { stores } from '../stores';
import { appConfig } from '../appConfig';

class Http {

    async get(url: string, headers: any) {
        url = this.handelUrl(url);
        if (!headers) {
            headers = this.getUnAuthorizedHeader();
        }
        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: headers
            });
            let responseJson = await response.json();
            this.handleResponse(responseJson);
            return responseJson;
        } catch (error) {
            this.handleCatchResponse(error);
            return error;
        }
    }

    async post(url: string, body: any, headers: any) {
        url = this.handelUrl(url);
        if (!headers) {
            headers = this.getUnAuthorizedHeader();
        }
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            });
            let responseJson = await response.json();
            this.handleResponse(responseJson);
            return responseJson;
        } catch (error) {
            this.handleCatchResponse(error);
            return error;
        }
    }

    async put(url: string, body: any, headers: any) {
        url = this.handelUrl(url);
        if (!headers) {
            headers = this.getUnAuthorizedHeader();
        }
        try {
            let response = await fetch(url, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(body)
            });
            let responseJson = await response.json();
            this.handleResponse(responseJson);
            return responseJson;
        } catch (error) {
            this.handleCatchResponse(error);
            return error;
        }
    }

    async delete(url: string, headers: any) {
        url = this.handelUrl(url);
        if (!headers) {
            headers = this.getUnAuthorizedHeader();
        }
        try {
            let response = await fetch(url, {
                method: 'DELETE',
                headers: headers,
            });
            let responseJson = await response.json();
            this.handleResponse(responseJson);
            return responseJson;
        } catch (error) {
            this.handleCatchResponse(error);
            return error;
        }
    }


    private handelUrl(url: string) {
        if (!url.includes('http')) {
            url = (url[0] === '/') ? `${appConfig.config.apiDomain}${url}` : `${appConfig.config.apiDomain}/${url}`;
        }
        return url;
    }

    getUnAuthorizedHeader() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        return headers;
    }

    async getAuthorizedHeader() {
        const accessToken = await localAppStorageHelper.getAccessToken();
        const authorization = accessToken;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': authorization
        }
        return headers;
    }

    /**
     * 
     * @param object : example {
        parameter1: 'value_1',
        parameter2: 'value 2',
        parameter3: 'value&3' 
        }
    * The result: "parameter1=value_1&parameter2=value%202&parameter3=value%263"
    * 
     */

    objectToQueryParams(object: Object) {
        const esc = encodeURIComponent;
        const query = Object.keys(object)
            .map(k => `${esc(k)}=${esc((object as any)[k])}`)
            .join('&');
        return query;

    }

    private handleCatchResponse = async (err: any) => {
        if (err?.message?.includes('Network request failed')) {
            // toastHelper.error(I18n.t('connection_error'));
        }
    }

    private handleResponse = async (response: any) => {
        // if (response.status === 403) {
        //     Alert.alert(
        //         I18n.t('confirm'),
        //         I18n.t('login_session_expired'),
        //         [
        //             {
        //                 text: I18n.t('login_again'),
        //                 onPress: this.logout,
        //             },
        //         ],
        //         { cancelable: false },
        //     );



        // } else if (response.status === 500 || response.status === 400) {
        //     toastHelper.error(I18n.t('error_undefined'));
        // } else if (response.status === 0) {
        //     toastHelper.error(I18n.t('no_internet_connection'));
        // } else if (response.status === 900) {
        //     toastHelper.error(I18n.t('system_error'));
        // } else if (response.status_code === 910) {
        //     toastHelper.error(I18n.t('access_denied'));
        // }
    }

    private logout = async () => {
        await localAppStorageHelper.clear();
        // stores.navigation?.navigate(appRoutes.authNavigator);
    }
}

export const http = new Http();