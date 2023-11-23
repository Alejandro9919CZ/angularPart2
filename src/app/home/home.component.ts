import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    public date
    public name

    constructor() {
        this.date = new Date(2020, 1, 15)
        this.name = "Alejandro Cuevas"
    }
}