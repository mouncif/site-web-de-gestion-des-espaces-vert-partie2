import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauArbreComponent } from './nouveau-arbre.component';

describe('NouveauArbreComponent', () => {
  let component: NouveauArbreComponent;
  let fixture: ComponentFixture<NouveauArbreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauArbreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauArbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
