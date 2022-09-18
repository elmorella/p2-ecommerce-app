import { TestBed } from '@angular/core/testing';

import { OrderReceiptServiceTsService } from './order-receipt.service';

describe('OrderReceiptServiceTsService', () => {
  let service: OrderReceiptServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderReceiptServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
