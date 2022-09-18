import { TestBed } from '@angular/core/testing';

import { ItemServiceTsService } from './item.service';

describe('ItemServiceTsService', () => {
  let service: ItemServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
