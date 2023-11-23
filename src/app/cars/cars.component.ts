import { Component } from "@angular/core";

import { Car } from "./car";

import { RequestService } from "../services/request.service";

@Component({
    selector: 'cars',
    templateUrl: './cars.component.html',
    providers: [RequestService]
})

export class CarsComponent {
    public car: Car;
    public carsArray: Array<Car>
    public comments

    constructor(
        private _requestService: RequestService
    ) {
        this.car = new Car("", "")
        this.carsArray = [new Car("Toyota", "1"), new Car("Nissan", "3")]
    }

    ngOnInit() {
        console.log(this._requestService.test())
        this._requestService.getComments().subscribe(
            result => { 
                this.comments = result.slice(0, 5)
                console.log(this.comments)
                if(!this.comments) console.log("API get error")
            },
            error => {
                var errorMessage = <any>error
                console.log(errorMessage)
            }
        )
    }

    onSubmit() {
        this.carsArray.push(this.car)
        this.car = new Car("", "")
    }
}