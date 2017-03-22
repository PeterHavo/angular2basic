"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../shared/models/user");
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.newUser = new user_1.User();
    }
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        styles: ["\n\tform {\n\t\tpadding: 10px;\n\t\tbackground: #ECF0F1;\n\t\tborder-radius: 3px;\n\t\tmargin-bottom:30px;\n\t}\n\n\n\n\t"
        ],
        template: "\n\t<form #form=\"ngForm\">\n\n\n\t \t{{form.valid}}\n\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" required [(ngModel)]=\"newUser.name\"  #name=\"ngModel\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" required [(ngModel)]=\"newUser.username\"  #username=\"ngModel\">\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"form.invalid\">\n\t\t\tCreate User\n\t\t</button>\n\t</form>\n\n\n\t",
    })
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map