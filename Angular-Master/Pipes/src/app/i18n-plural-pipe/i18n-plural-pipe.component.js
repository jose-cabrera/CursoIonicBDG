"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var I18nPluralPipeComponent = (function () {
    function I18nPluralPipeComponent() {
        this.messages = ['Message 1'];
        this.messageMapping = { '=0': 'No messages.', '=1': 'One message.', 'other': '# messages.' };
    }
    I18nPluralPipeComponent = __decorate([
        core_1.Component({
            selector: 'i18n-plural-pipe',
            template: "<div>{{ messages.length | i18nPlural: messageMapping }}</div>"
        })
    ], I18nPluralPipeComponent);
    return I18nPluralPipeComponent;
}());
exports.I18nPluralPipeComponent = I18nPluralPipeComponent;
//# sourceMappingURL=i18n-plural-pipe.component.js.map