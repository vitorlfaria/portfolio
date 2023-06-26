import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitSnakeComponent } from './commit-snake.component';

describe('CommitSnakeComponent', () => {
  let component: CommitSnakeComponent;
  let fixture: ComponentFixture<CommitSnakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommitSnakeComponent]
    });
    fixture = TestBed.createComponent(CommitSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
