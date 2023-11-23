import { Component } from "@angular/core";

@Component({
    selector: 'templates',
    templateUrl: './templates.component.html'
})

export class TemplatesComponent {
    public title
    public admin

    constructor() {
        this.title = "Templates component"
        this.admin = true
    }

    changeAdmin() {
        this.admin = !this.admin
        console.log(this.admin)
    }

}