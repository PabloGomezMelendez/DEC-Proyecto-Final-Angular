import { Component, OnInit } from '@angular/core';
import { Ianime } from '../../interface/ianime';
import { TopSeviceService } from '../../services/top-sevice.service';
import { Irespuesta } from '../../interface/irespuesta';
import { Imanga } from '../../interface/imanga';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  animes!: Ianime[];
  mangas!: Imanga[];

  constructor(private serviciosProductos: TopSeviceService) { }

  ngOnInit(): void {
    this.serviciosProductos.obtenerTopAnimes().subscribe((data: Irespuesta) => {
      this.animes = data.data;
    });
    this.serviciosProductos.obtenerTopMangas().subscribe((data: Irespuesta) => {
      this.mangas = data.data;
      // console.log(this.mangas);
    });
  }
  idNumberAnime(id: string) {
    return parseInt(id);
  }
}
