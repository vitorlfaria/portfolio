import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoContactsComponent } from './photo-contacts.component';

describe('PhotoContactsComponent', () => {
  let component: PhotoContactsComponent;
  let fixture: ComponentFixture<PhotoContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoContactsComponent]
    });
    fixture = TestBed.createComponent(PhotoContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
