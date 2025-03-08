import { Component, OnInit } from '@angular/core';
import { Ianime } from '../../interface/ianime';
import { Irespuesta } from '../../interface/irespuesta';
import { AnimeSeviceService } from '../../services/anime-sevice.service';

@Component({
  selector: 'app-biblioteca-anime',
  standalone: false,
  templateUrl: './biblioteca-anime.component.html',
  styleUrl: './biblioteca-anime.component.css'
})
export class BibliotecaAnimeComponent implements OnInit {
  animes!: Ianime[];

  constructor(private serviciosBibliotecaAnime: AnimeSeviceService) { }

  ngOnInit(): void {
    this.serviciosBibliotecaAnime.obtenerAllAnime().subscribe((data: Irespuesta) => {
      this.animes = data.data;
      console.log(this.animes);
    });
  }
}
