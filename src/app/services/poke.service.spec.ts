import { TestBed } from '@angular/core/testing';

import { PokeService } from './poke.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from "@angular/common/http/testing";
import { pokeListMock } from '../__mocks__/pokeList.mock';
import { PokeList } from '../poke/interfaces/PokeList.interface';
import { PokeData } from '../poke/interfaces/pokeData.interface';
import { pokeDataMock } from '../__mocks__/pokeData.mock';

describe('PokeService', () => {
  let service: PokeService;
  let httpClient: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeService]
    });

    httpClient = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokeService);

  });

  afterEach(()=>{

  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Deberia hacer una peticion http", (done: DoneFn)=>{

    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8"

    service.getList().subscribe((res)=>{
      done()
    });

    const req: TestRequest= httpClient.expectOne(url);

    expect(req.request.url).toEqual(service.url);
    expect(req.request.urlWithParams).toEqual(url);
    expect(req.request.method).toEqual("GET")

    req.flush(pokeListMock)

    httpClient.verify();

  })

  it("Deberia retornar la lista de pokemones", (done: DoneFn)=>{

    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8"

    service.getList().subscribe((res: PokeList)=>{
      expect(res).toEqual(pokeListMock);
      expect(res.results.length).toEqual(8)
      done()
    });

    httpClient.expectOne(url).flush(pokeListMock)

  })

  it("Deberia retornar la imagen del pokemon", (done: DoneFn)=>{

    const url = "https://pokeapi.co/api/v2/pokemon/1"

    service.getInfo('1').subscribe((res: PokeData)=>{
      expect(res).toEqual(pokeDataMock);
      done()
    });

    httpClient.expectOne(url).flush(pokeDataMock)

  })

});
