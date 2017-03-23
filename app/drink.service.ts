import { Headers, Http, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/ToPromise';
import { Drink } from './drink.ts';

@Injectable()
export class DrinkService {

      getDrinks(): Promise<Drink[]> {
        return this.http.get('http://claremontbarwebapi.azurewebsites.net/api/products')
            .toPromise()
            .then(response => response.json() as Drink[])
            .catch(this.handleError);
    }

    handleError(): void { }

  constructor(private http: Http) { }

}

