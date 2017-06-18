"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //grab users from https://reqres.in/
        this.http.get('https://reqres.in/api/users')
            .map(function (res) { return res.json().data; })
            .subscribe(function (users) { return _this.users = users; });
        // if I want just import rxjs/add/operator/toPromise and use promise instand of observables 
        // this.http.get('https://reqres.in/api/users')
        // 	.toPromise()
        // 	.then(data => {console.log(data.json().data)})
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-appp',
        template: "  <div class=\"jumbotron text-center\">\n\t\t\t\t\t<h1>App is app and running </h1>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf = \"users\">\n\t\t\t\t\t<div *ngFor = \"let user of users\">\n\t\t\t\t\t\t<h2>{{user.first_name}}</h2>\n\t\t\t\t\t</div>\n\t\t\t</div>"
        // templateUrl: './app/app.component.html',
        // styleUrls: ['./app/app.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map