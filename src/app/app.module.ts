import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator/translator.component';
import { HeaderComponent } from './header/header.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SavedTranslationsComponent } from './saved-translations/saved-translations.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    HeaderComponent,
    LanguagesListComponent,
    SavedTranslationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
