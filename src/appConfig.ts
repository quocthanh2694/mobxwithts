
import { observable } from 'mobx';
const appVersion = '0.0.1';

export const config = {
    development: {
        name: 'development',
        appVersion: appVersion,
        apiDomain: 'http://development.loyaworld.com:4000',
    },
    staging: {
        name: 'staging',
        appVersion: appVersion,
        apiDomain: 'https://staging.loyaworld.com:4001',

    },
    production: {
        name: 'production',
        appVersion: appVersion,
        apiDomain: 'https://api.loya.one:4001',
    }
}

class AppConfig {

    @observable
    config = config.development;

    constructor() {
    }

}

export const appConfig = new AppConfig();

