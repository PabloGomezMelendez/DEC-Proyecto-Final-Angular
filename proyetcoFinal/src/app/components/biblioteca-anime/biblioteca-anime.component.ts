import { Component, OnInit } from '@angular/core';
import { Ianime } from '../../interface/ianime';
import { Irespuesta } from '../../interface/irespuesta';
import { AnimeSeviceService } from '../../services/anime-sevice.service';
import { IfiltroAnime } from '../../interface/ifiltro-anime';
import { Igeneros } from '../../interface/igeneros';
import { IrespuestaAnime } from '../../interface/irespuesta-anime';
import { IrespuestaGeneros } from '../../interface/irespuesta-generos';

@Component({
  selector: 'app-biblioteca-anime',
  standalone: false,
  templateUrl: './biblioteca-anime.component.html',
  styleUrl: './biblioteca-anime.component.css'
})
export class BibliotecaAnimeComponent implements OnInit {
  filtro: IfiltroAnime = {
    name: '',
    status: '',
    type: '',
    genres: ''
  }
  selectedValues: string[] = [];;

  animes!: Ianime[];
  genres!: Igeneros[];

  constructor(private serviciosBibliotecaAnime: AnimeSeviceService) { }

  ngOnInit(): void {
    this.serviciosBibliotecaAnime.obtenerAllAnime().subscribe((data: IrespuestaAnime) => {
      this.animes = data.data;
      console.log(this.animes[0].mal_id);
    });
    this.serviciosBibliotecaAnime.obtenerGenerosAnime().subscribe((data: IrespuestaGeneros) => {
      this.genres = data.data;
      // console.log(this.genres);
    });
  }
  // buscarAnime() {}
  buscarAnime() {
    this.filtro.genres = this.selectedValues.join(',');
    this.serviciosBibliotecaAnime.obtenerFilterAnime(this.filtro).subscribe((data: Irespuesta) => {
      this.animes = data.data;
      // console.log(this.animes[0].mal_id);
    });
  }


  // Método para manejar la selección de checkboxes
  onCheckboxChange(event: any, value: number) {
    if (event.target.checked) {
      this.selectedValues.push(value.toString());
    } else {
      const index = this.selectedValues.indexOf(value.toString());
      if (index > -1) {
        this.selectedValues.splice(index, 1);
      }
    }
  }
}
