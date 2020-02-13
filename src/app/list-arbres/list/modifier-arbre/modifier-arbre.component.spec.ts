import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierArbreComponent } from './modifier-arbre.component';

describe('ModifierArbreComponent', () => {
  let component: ModifierArbreComponent;
  let fixture: ComponentFixture<ModifierArbreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierArbreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierArbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
