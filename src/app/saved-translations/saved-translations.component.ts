import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core'

export interface SavedTranslation {
  language: string
  text: string
  translation: string
}

@Component({
  selector: 'app-saved-translations',
  templateUrl: './saved-translations.component.html'
})
export class SavedTranslationsComponent {
  public savedTranslations: SavedTranslation[] = []
  public selectedLanguage!: string
  public inputText!: string
  public translatedText!: string
  @Output() public selectSavedTranslation = new EventEmitter<SavedTranslation>()

  
  constructor () {
    this.savedTranslations = this.getSavedTranslations()
  }
  
  ngDoCheck(): void {
    this.savedTranslations = this.getSavedTranslations()
  }
  
  selectTraslation(data: SavedTranslation): void {
    this.selectSavedTranslation.emit(data)
  }

  getSavedTranslations (): SavedTranslation[] {
    const savedTranslations: SavedTranslation[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith('TA-')) {
        const language = key.replace('TA-', '').split('-')[1]
        const text = key.replace('TA-', '').split('-')[0]
        const translation = localStorage.getItem(key)
        if (translation) {
          savedTranslations.push({ language, text, translation })
        }
      }
    }
    return savedTranslations
  }
}
