import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Hospital } from "src/app/modal/hosiptal";
import { Observable } from "rxjs";
 
@Injectable()
export class UserService {
    constructor(private httpClient:HttpClient){

    }
    getAllHospital():Observable<Hospital[]>{
        return this.httpClient.get<Hospital[]>('http://localhost:3000/posts');

    }

}