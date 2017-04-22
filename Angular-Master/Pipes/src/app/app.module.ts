import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AsyncPromisePipeComponent } from './async-promise-pipe/async-promise-pipe.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { NumberPipeComponent } from './number-pipe/number-pipe.component';
import { JsonPipeComponent } from './json-pipe/json-pipe.component';
import { SlicePipeListComponent } from './slice-pipe-list/slice-pipe-list.component';
import { SlicePipeStringComponent } from './slice-pipe-string/slice-pipe-string.component';
import { CurrencyPipeComponent } from './currency-pipe/currency-pipe.component';
import { I18nPluralPipeComponent } from './i18n-plural-pipe/i18n-plural-pipe.component';
import { LowerUpperPipeComponent } from './lower-upper-pipe/lower-upper-pipe.component';
import { TitleCasePipeComponent } from './title-case-pipe/title-case-pipe.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { I18nSelectPipeComponent } from './i18n-select-pipe/i18n-select-pipe.component';
import { PercentPipeComponent } from './percent-pipe/percent-pipe.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPromisePipeComponent,
    AsyncObservablePipeComponent,
    NumberPipeComponent,
    JsonPipeComponent,
    SlicePipeListComponent,
    SlicePipeStringComponent,
    CurrencyPipeComponent,
    I18nPluralPipeComponent,
    LowerUpperPipeComponent,
    TitleCasePipeComponent,
    DatePipeComponent,
    I18nSelectPipeComponent,
    PercentPipeComponent,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
