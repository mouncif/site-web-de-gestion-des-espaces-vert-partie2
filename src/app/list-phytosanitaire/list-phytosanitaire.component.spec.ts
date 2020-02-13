import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhytosanitaireComponent } from './list-phytosanitaire.component';

describe('ListPhytosanitaireComponent', () => {
  let component: ListPhytosanitaireComponent;
  let fixture: ComponentFixture<ListPhytosanitaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhytosanitaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhytosanitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
