
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_TOP5_ANIME='https://api.jikan.moe/v4/top/anime?filter=bypopularity&sfw=false&limit=5';

@Injectable({
  providedIn: 'root'
})


export class TopSeviceService {

  constructor(private HttpClient: HttpClient) { }

  //Metodo que devuelve un array de productos
  obtenerTopAnime(){
    return this.HttpClient.get<any>(`${URL_TOP5_ANIME}`);
  }
}
