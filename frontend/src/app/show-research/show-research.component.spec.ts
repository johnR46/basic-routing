import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResearchComponent } from './show-research.component';

describe('ShowResearchComponent', () => {
  let component: ShowResearchComponent;
  let fixture: ComponentFixture<ShowResearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowResearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
