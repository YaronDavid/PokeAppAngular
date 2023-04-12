import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://pokeapi.co/api/v2/"

  getList(page: number = 139){
    return this.http.get(`${this.baseUrl}pokemon/`, 
    {params: {
      "offset": page,
      "limit": 11
    }});
  }

  getInfo(nombrePokemon: string){
    return this.http.get(`${this.baseUrl}pokemon/${nombrePokemon}`);
  }

}
