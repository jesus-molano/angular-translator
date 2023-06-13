import { Component } from '@angular/core';
import { SavedTranslation } from './saved-translations/saved-translations.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public selectedSavedTranslation: SavedTranslation | undefined;

  public selectSavedTranslation(data: SavedTranslation): void {
    this.selectedSavedTranslation = data;
  }

  public resetSelectedSavedTranslation(): void {
    this.selectedSavedTranslation = undefined;
  }
}
