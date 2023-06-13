import { Component, inject, DoCheck, Input, Output, EventEmitter } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { faStar as faStarSolid, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { SavedTranslation } from '../saved-translations/saved-translations.component'

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html'
})
export class TranslatorComponent implements DoCheck {
  public selectedLanguage: string = 'es'
  public inputText: string | Event = ''
  public translatedText: string = ''
  private http = inject(HttpClient)
  private previousLanguage: string = '';
  public icons = { faStarSolid, faStar, faXmark };
  public isSavedTranslation: boolean = false
  @Input() public savedTranslation!: SavedTranslation | undefined
  @Output() public resetSavedTranslation = new EventEmitter<void>()


  get translationKey(): string {
    return `TA-${this.inputText}-${this.selectedLanguage}`
  }

  ngDoCheck(): void {
    localStorage.getItem(this.translationKey) ? this.isSavedTranslation = true : this.isSavedTranslation = false;

    if (this.savedTranslation) {
      this.inputText = this.savedTranslation.text;
      this.selectedLanguage = this.savedTranslation.language;
      this.translatedText = this.savedTranslation.translation;
    }

    if (this.selectedLanguage !== this.previousLanguage) {
      this.previousLanguage = this.selectedLanguage;
      this.traslateText();
    }
  }

  changeLanguage(language: string): void {
    this.resetSavedTranslation.emit()
    this.isSavedTranslation = false;
    this.selectedLanguage = language
  }

  resetTranslation(): void {
    this.resetSavedTranslation.emit()
    this.isSavedTranslation = false;
    this.inputText = '';
    this.translatedText = '';
  }

  saveTranslation(): void {
    this.resetSavedTranslation.emit()
    this.isSavedTranslation = true;
    localStorage.setItem(this.translationKey, this.translatedText)
  }

  removeSavedTranslation(): void {
    this.resetSavedTranslation.emit()
    this.isSavedTranslation = false;
    localStorage.removeItem(this.translationKey)
  }

  traslateText(): void {
    this.resetSavedTranslation.emit()
    if (!this.inputText) return
    this.http
      .post(
        'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDNltKX8oKTEQWRYGUtc4zzFWfNjFV2DvI',
        {
          q: this.inputText,
          target: this.selectedLanguage
        }
      )
      .subscribe((response: any) => {
        this.translatedText = response.data.translations[0].translatedText
      })
  }


}
