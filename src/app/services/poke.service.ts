import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeList } from '../poke/interfaces/PokeList.interface';
import { PokeData } from '../poke/interfaces/pokeData.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://pokeapi.co/api/v2/';

  get url() {
    return this.baseUrl + 'pokemon/';
  }

  getList(page: number = 0) {
    return this.http.get<PokeList>(`${this.baseUrl}pokemon/`, {
      params: {
        offset: page,
        limit: 8,
      },
    });
  }

  getInfo(nombrePokemon: string) {
    return this.http.get<PokeData>(`${this.baseUrl}pokemon/${nombrePokemon}`);
  }
}
