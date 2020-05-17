import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RestApiService {
    public readonly BASE_URL = "https://jsonplaceholder.typicode.com";
    public readonly BASE_URL_AUTH_MUTUAL = "https://www.codeapp.us/api.php";
    public readonly PATH_POST = this.BASE_URL + "/posts";
    public readonly PATH_COMMENT = this.BASE_URL + "/comments";
    public readonly PATH_LOGIN = "https://enigmatic-bastion-96061.herokuapp.com/login";
}
