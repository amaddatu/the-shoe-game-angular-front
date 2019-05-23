import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ShoeService } from './shoe.service';
import { of } from 'rxjs';

let httpTestingController: HttpTestingController;
let service: ShoeService;

const mockShoes = of([
  {
    id: 1
  },
  {
    id: 2
  }
]);
describe('ShoeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ShoeService);
});

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should get a list of all shoes', () => {
    const service: ShoeService = TestBed.get(ShoeService);
    
    service.getAll().subscribe(shoes => {
      expect(shoes.length).toBe(2);
    });


    const req = httpTestingController.expectOne('http://localhost:4200/shoes');

    expect(req.request.method).toEqual('GET');

    req.flush(mockShoes);
  });
});
