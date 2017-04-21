"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var I18nSelectPipeComponent = (function () {
    function I18nSelectPipeComponent() {
        this.gender = 'male';
        this.inviteMap = { 'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.' };
    }
    I18nSelectPipeComponent = __decorate([
        core_1.Component({ selector: 'i18n-select-pipe', template: "<div>{{gender | i18nSelect: inviteMap}} </div>" })
    ], I18nSelectPipeComponent);
    return I18nSelectPipeComponent;
}());
exports.I18nSelectPipeComponent = I18nSelectPipeComponent;
//# sourceMappingURL=i18n-select-pipe.component.js.map