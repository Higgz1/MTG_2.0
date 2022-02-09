import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SetsService } from './sets.service';
import { mockSetsData } from 'src/assets/mockData';

describe('SetsService', () => {
  let setService: SetsService;
  let httpTestingController: HttpTestingController;
  const baseUrl = 'https://api.scryfall.com/sets';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SetsService],
    });
    setService = TestBed.inject(SetsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  // test if we get sets from http call
  it('should return all sets', () => {
    setService.getSets().subscribe((sets: any) => {
      const testSet = sets.data.filter(
        (set) => set.id === 'b314f553-8f07-4ba9-96c8-16be7784eff3'
      );
      expect(sets).toBeTruthy('No sets found');
      expect(testSet[0].name).toBe('Unfinity', 'Not correct');
      expect(sets).toEqual(mockSetsData, 'should return expected results');
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockSetsData);
  });

  //test if we get a single set
  it('should return a single set', () => {
    const code = 'b314f553-8f07-4ba9-96c8-16be7784eff3';
    setService.getSingleSet(code).subscribe((set: any) => {
      expect(set).toBeTruthy();
      expect(set.data[0].name).toBe('Unfinity');
    });

    const req = httpTestingController.expectOne(baseUrl + '/' + code);
    expect(req.request.method).toBe('GET');
    req.flush(mockSetsData);
  });
});
