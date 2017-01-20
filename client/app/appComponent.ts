/**
 * Created by vincebloise on 1/19/17.
 */
import { Component }      from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from "rxjs/Observable";

@Component({
    selector: 'http-client',
    template: `<h1>All Products - Bloise AWS NodeJS with AngularJS</h1>
  <ul>
    <li *ngFor="let product of products">
       {{product.title}}
    </li>
  </ul>
  <yo-mo-fo></yo-mo-fo>
  `})
export class AppComponent {

    products: Array<string> = [];

    theDataSource: Observable<Array<string>>;

    constructor(private http: Http) {

        this.theDataSource = this.http.get('/products')
            .map(res => res.json());
    }

    ngOnInit(){

        // Get the data from the server
        this.theDataSource.subscribe(
            data => {
                if (Array.isArray(data)){
                    this.products=data;
                } else{
                    this.products.push(data);
                }
            },
            err =>
                console.log("Can't get products. Error code: %s, URL: %s ",  err.status, err.url),
            () => console.log('Product(s) are retrieved')
        );
    }
}