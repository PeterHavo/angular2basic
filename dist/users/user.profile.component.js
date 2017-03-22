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
var user_1 = require("../shared/models/user");
var UserProfileClass = (function () {
    function UserProfileClass() {
    }
    return UserProfileClass;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], UserProfileClass.prototype, "user", void 0);
UserProfileClass = __decorate([
    core_1.Component({
        selector: 'user-profile',
        template: "\t<div class=\"jumbotron\" *ngIf=\"user\">\n\t\t\t\t\t<h2>{{user.name}}   <small>{{user.username}} {{user.id}}</small></h2>\n\t\t\t\t\t<p>{{message}}</p>\n\t\t\t\t\t<input class=\"form-control\" [(ngModel)]=\"user.name\">\n\t\t\t\t</div>\n\n\n\t"
    })
], UserProfileClass);
exports.UserProfileClass = UserProfileClass;
//# sourceMappingURL=user.profile.component.js.map