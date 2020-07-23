import { Province } from './province';
export interface Account { 
    id: string;
    username: string;
    type: string;
    profileId: string;
    name: string;
    dateOfBirth: number | null;
    gender: number | null;
    phone: string;
    email: string;
    address: string;
    provinceId: string;
    province: Province | null;
    point: number;
    coin: number;
    totalMoney: number;
    urlAvatar: string;
    description: string;
    role: string;
    walletAddress: string;
    tokenBalance: string;
    createDate: number;
    hasPassword: string;
    hasFacebook: false,
    hasGoogle: false
    brandId: string;
}