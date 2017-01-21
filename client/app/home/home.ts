/**
 * Created by vincebloise on 1/19/17.
 */
import { Component, ViewEncapsulation }      from '@angular/core';
import { Http, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Observable} from "rxjs/Observable";

@Component({
    selector: 'http-client',
    templateUrl: 'app/home/home.html',
    styleUrls: ['app/home/home.css'],
    encapsulation:ViewEncapsulation.None
})

export default class HomeComponent {

    products: Observable<Array<string>>;
    errorMessage: string;

    constructor(private http: Http) {

        this.products = this.http.get('/products')
            .map(res => res.json())
            .catch( err => {
                this.errorMessage =`Can't get product details from ${err.url}, error ${err.status} `;
                return Observable.empty();
            });
    }
}