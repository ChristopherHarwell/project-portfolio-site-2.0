import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseProjectCardComponent } from './showcase-project-card.component';

describe('ShowcaseProjectCardComponent', () => {
  let component: ShowcaseProjectCardComponent;
  let fixture: ComponentFixture<ShowcaseProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseProjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
