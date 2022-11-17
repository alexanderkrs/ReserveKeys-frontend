import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveListComponent } from './chave-list.component';

describe('TaskListComponent', () => {
  let component: ChaveListComponent;
  let fixture: ComponentFixture<ChaveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
