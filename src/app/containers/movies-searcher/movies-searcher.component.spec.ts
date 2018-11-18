import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSearcherComponent } from './movies-searcher.component';

describe('MoviesSearcherComponent', () => {
  let component: MoviesSearcherComponent;
  let fixture: ComponentFixture<MoviesSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
