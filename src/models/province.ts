import { Nation } from './nation';

export interface Province { 
    id: string;
    name: string;
    nation: Nation;
    description: null | string;
    delete: boolean;
}