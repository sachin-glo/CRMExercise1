import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListHeaderComponent } from './client-list-header.component';

describe('ClientListHeaderComponent', () => {
  let component: ClientListHeaderComponent;
  let fixture: ComponentFixture<ClientListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
