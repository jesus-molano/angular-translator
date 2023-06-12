import { Component, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent {
  public selectedLanguage: string = 'es'
  public inputText: string | Event = ''
  public translatedText: string = ''
  private http = inject(HttpClient)

  changeLanguage(language: string): void {
    this.selectedLanguage = language
  }

  traslateText(event: Event): void {
    event.preventDefault()
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
