import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CardsService } from './cards.service';
import { mockCardsData } from 'src/assets/mockData';

describe('CardsService', () => {
  let cardService: CardsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardsService],
    });
    cardService = TestBed.inject(CardsService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should GET cards based on URL', () => {
    const url =
      'https://api.scryfall.com/cards/search?order=set&q=e%3Ammq&unique=prints';
    cardService.getCards(url).subscribe((cards: any) => {
      expect(cards).toBeTruthy('no cards found');
      expect(cards.data[0].id).toBe('5aa90ab6-2686-4462-8725-5d4370c05437');
    });

    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockCardsData);
  });
});
