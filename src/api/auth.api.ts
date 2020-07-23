import { HttpResponse } from "../models/httpResponse";
import { RegisterResponseData } from "../models/registerResponseData";
import { http } from "./http";

class AuthApi {
    async hello(body: any): Promise<HttpResponse<RegisterResponseData>> {
        try {
            let response = await http.post('https://jsonplaceholder.typicode.com/users', body, null);
            return response;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}
export const authApi = new AuthApi();