import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language, listOfLanguages } from 'src/utils/listOfLanguages';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: ['./languages-list.component.css']
})
export class LanguagesListComponent {
  public languages: Language[];
  @Input() public selectedLanguage!: string;
  @Output() public languageChanged = new EventEmitter<string>();
  
  constructor() {
    this.languages = listOfLanguages();
  }

  public changeLanguage(language: Language): void {
    this.languageChanged.emit(language.value);
  }
}
