"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var async_promise_pipe_component_1 = require('./async-promise-pipe/async-promise-pipe.component');
var async_observable_pipe_component_1 = require('./async-observable-pipe/async-observable-pipe.component');
var number_pipe_component_1 = require('./number-pipe/number-pipe.component');
var json_pipe_component_1 = require('./json-pipe/json-pipe.component');
var slice_pipe_list_component_1 = require('./slice-pipe-list/slice-pipe-list.component');
var slice_pipe_string_component_1 = require('./slice-pipe-string/slice-pipe-string.component');
var currency_pipe_component_1 = require('./currency-pipe/currency-pipe.component');
var i18n_plural_pipe_component_1 = require('./i18n-plural-pipe/i18n-plural-pipe.component');
var lower_upper_pipe_component_1 = require('./lower-upper-pipe/lower-upper-pipe.component');
var title_case_pipe_component_1 = require('./title-case-pipe/title-case-pipe.component');
var date_pipe_component_1 = require('./date-pipe/date-pipe.component');
var i18n_select_pipe_component_1 = require('./i18n-select-pipe/i18n-select-pipe.component');
var percent_pipe_component_1 = require('./percent-pipe/percent-pipe.component');
var custom_pipe_1 = require('./custom.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                async_promise_pipe_component_1.AsyncPromisePipeComponent,
                async_observable_pipe_component_1.AsyncObservablePipeComponent,
                number_pipe_component_1.NumberPipeComponent,
                json_pipe_component_1.JsonPipeComponent,
                slice_pipe_list_component_1.SlicePipeListComponent,
                slice_pipe_string_component_1.SlicePipeStringComponent,
                currency_pipe_component_1.CurrencyPipeComponent,
                i18n_plural_pipe_component_1.I18nPluralPipeComponent,
                lower_upper_pipe_component_1.LowerUpperPipeComponent,
                title_case_pipe_component_1.TitleCasePipeComponent,
                date_pipe_component_1.DatePipeComponent,
                i18n_select_pipe_component_1.I18nSelectPipeComponent,
                percent_pipe_component_1.PercentPipeComponent,
                custom_pipe_1.CustomPipe,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map