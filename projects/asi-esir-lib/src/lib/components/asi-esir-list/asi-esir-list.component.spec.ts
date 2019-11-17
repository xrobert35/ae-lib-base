import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiEsirListComponent } from './asi-esir-list.component';

describe('AsiEsirListComponent', () => {
  let component: AsiEsirListComponent;
  let fixture: ComponentFixture<AsiEsirListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiEsirListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiEsirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
