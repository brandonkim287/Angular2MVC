import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*The @Injectable decorator identifies services and other classes that are intended to be injected.
*It can also be used to configure a provider for those services.
 * One awesome thing about RESTful API is the HTTP verbs like functions names.
 * If a function name is starting from GET, PUT, POST, or DELETE, we only need
 * base URL (endpoint), by the HTTP call, it automtically determines the corresponding function.
 * It’s obvious, one Web API controller should have one HTTP verb method.
 * The other methods POST, PUT and DELETE have almost same function body,
 * creating the http header and sending the IUser interface in body where it is being
 * received in Web API controller functions and automatically get converted to user entity because
 * column name does match.
 * */
@Injectable()
export class UserService {
    constructor(private _http: Http) { }

    //returns list of users. For loading users to app
    get(url: string): Observable<any> {
        return this._http.get(url)
            .map((response: Response) => <any>response.json())
            // .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    post(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    put(url: string, id: number, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url+id, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    delete(url: string, id: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url+id,options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}