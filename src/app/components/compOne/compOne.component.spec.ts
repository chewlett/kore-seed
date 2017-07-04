import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompOneComponent } from './compOne.component';

describe('Comp1Component', () => {
  let component: CompOneComponent;
  let fixture: ComponentFixture<CompOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
