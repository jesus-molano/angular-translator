import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedTranslationsComponent } from './saved-translations.component';

describe('SavedTranslationsComponent', () => {
  let component: SavedTranslationsComponent;
  let fixture: ComponentFixture<SavedTranslationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedTranslationsComponent]
    });
    fixture = TestBed.createComponent(SavedTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
