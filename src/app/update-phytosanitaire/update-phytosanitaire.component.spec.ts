import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePhytosanitaireComponent } from './update-phytosanitaire.component';

describe('UpdatePhytosanitaireComponent', () => {
  let component: UpdatePhytosanitaireComponent;
  let fixture: ComponentFixture<UpdatePhytosanitaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePhytosanitaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePhytosanitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
