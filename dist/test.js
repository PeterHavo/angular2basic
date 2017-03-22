"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var APPtestCom = (function () {
    function APPtestCom() {
        this.mesage = 'havo';
        this.users = [{ id: 25, name: 'Chris', username: 'sevilayha' },
            { id: 26, name: 'Nick', username: 'whatnicktweets' },
            { id: 27, name: 'Holly', username: 'hollylawly' }
        ];
    }
    APPtestCom.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    return APPtestCom;
}());
APPtestCom = __decorate([
    core_1.Component({
        selector: 'tes-app',
        template: "\n\t<header>\n\t<nav class=\"navbar navbar-inverse\">\n\t\t<div class=\"navbar-header\">\n\t\t<a href = \"/\" class=\"navbar-brand\">My Angular2 App!</a>\n\t\t</div>\n\t</nav>\n\t</header>\n\n<main>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div *ngIf=\"users\">\n\t\t\t\t \n\t\t\t\t  <ul class=\"list-group users-list\">\n\n\t\t\t\t  \t\t<li class=\"list-group-item\" *ngFor=\"let uzivatel of users\" (click)=\"selectUser(uzivatel)\" [class.active]=\"uzivatel === activeUser\">{{uzivatel.name}} ({{uzivatel.username}})</li>\n\t\t\t\t\t</ul>\t\t\t\t\t \n\t\t\t\t \n \t\t    </div>\t\n \t\t    <user-form></user-form>\n\n\t\t</div>\n\n\t\t<div class=\"col-sm-8\">\n\n\t\t\t<user-profile [user]=\"activeUser\"></user-profile>\n\n\t\t\t\t<div class=\"jumbotron\" *ngIf=\"!activeUser\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-hand-left\"></span>\n\t\t\t\t\t<h2>Choose a User</h2>\n\t        <p>The user is {{user.name}} ({{user.username}})</p>\n\t      </div>  \n\t\t</div>\n\t</div>\n\n\t\n\n</main>\n\t \n\n<footer class=\"text-center\">\n\tCopyright &copy; 2017\n</footer>\n\n\t",
        styles: ["\n    .users-list li   {\n      cursor: pointer;\n    }\n    .jumbotron .glyphicon {\n      font-size: 80px;\n    }\n  "]
    })
], APPtestCom);
exports.APPtestCom = APPtestCom;
//# sourceMappingURL=test.js.map