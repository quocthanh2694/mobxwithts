import { Account } from './account';

export interface RegisterResponseData {
    authorization: string;
    message: string;
    status: string;
    timestamp: string;
    account: Account;
}