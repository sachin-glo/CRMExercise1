import { TestBed, inject } from '@angular/core/testing';

import { ClientDataService } from './client-data.service';
import { ApiService } from '../api.service';
import { ApiMockService } from '../api-mock.service';
describe('ClientDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientDataService,
      {
        provide: ApiService,
          useClass: ApiMockService
      }      
      ]
      
    });
  });

  it('should be created', inject([ClientDataService], (service: ClientDataService) => {
    expect(service).toBeTruthy();
  }));
});
