import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListFooterComponent } from './client-list-footer.component';

describe('ClientListFooterComponent', () => {
  let component: ClientListFooterComponent;
  let fixture: ComponentFixture<ClientListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
