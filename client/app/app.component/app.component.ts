/**
 * Created by vincebloise on 1/25/17.
 */
import {Component, Optional, ViewEncapsulation} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import { Http, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { Observable} from "rxjs/Observable";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'material2-app-app',
    templateUrl: 'app/app.component/app.component.html',
    styleUrls: ['app/app.component/app.component.css'],
    encapsulation:ViewEncapsulation.None
})
export class Material2AppAppComponent {
    isDarkTheme: boolean = false;
    lastDialogResult: string;

    products: Observable<Array<string>>;
    errorMessage: string;
    productId: Number;
    randomness: Number;
    selected = '';

    getRandomNumber(): number {
        return Math.random();
    }

    select(text: string) {
        this.selected = text;
        this.lastDialogResult = text;
    }

    foods: any[] = [
        {name: 'Pizza', rating: 'Excellent'},
        {name: 'Burritos', rating: 'Great'},
        {name: 'French fries', rating: 'Pretty good'},
    ];

    progress: number = 0;

    constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar, private http: Http, route: ActivatedRoute) {
        this.products = this.http.get('/products')
            .map(res => res.json())
            .catch( err => {
                this.errorMessage =`Can't get product details from ${err.url}, error ${err.status} `;
                return Observable.empty();
            });
        this.productId = route.snapshot.params['id'];
        this.randomness = this.getRandomNumber();
        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }

    openDialog() {
        let dialogRef = this._dialog.open(DialogContent);

        dialogRef.afterClosed().subscribe(result => {
            this.lastDialogResult = result;
        })
    }

    showSnackbar() {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    }
}


@Component({
    template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})
export class DialogContent {
    constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}