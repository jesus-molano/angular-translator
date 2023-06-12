import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Language, listOfLanguages } from 'src/utils/listOfLanguages'

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.css']
})
export class LanguagesListComponent {
  private languages: Language[]
  @Input() public selectedLanguage!: string
  @Output() public languageChanged = new EventEmitter<string>()
  public selectedOption: string = ''

  constructor () {
    this.languages = listOfLanguages()
  }

  // Getters
  get selectedLanguageLabel (): string {
    const language = this.languages.find((language: Language) => {
      return language.value === this.selectedLanguage
    })
    return language ? language.label : ''
  }

  get filteredLanguages (): Language[] {
    return this.languages.filter((language: Language) => {
      return language.value !== this.selectedLanguage
    })
  }

  get top2Languages (): Language[] {
    return this.filteredLanguages.slice(0, 2)
  }

  get remainingLanguages (): Language[] {
    return this.filteredLanguages.slice(2)
  }

  // Methods
  changeLanguage (language: Language): void {
    this.languageChanged.emit(language.value)
  }

  handleSelectChange(): void {
    this.languageChanged.emit(this.selectedOption)
  }
}
