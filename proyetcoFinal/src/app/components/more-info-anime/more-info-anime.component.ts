import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IanimeFull } from '../../interface/ianime-full';
import { AnimeSeviceService } from '../../services/anime-sevice.service';
import { IrespuestaAnimeFull } from '../../interface/irespuesta-anime-full';

@Component({
  selector: 'app-more-info-anime',
  standalone: false,
  templateUrl: './more-info-anime.component.html',
  styleUrl: './more-info-anime.component.css'
})
export class MoreInfoAnimeComponent implements OnInit {
  anime?: IanimeFull;
  id?: number;
  trailerError: boolean = false;

  constructor(private route: ActivatedRoute, private serviciosProductos: AnimeSeviceService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.serviciosProductos.obtenerAnimeById(this.id).subscribe((data: IrespuestaAnimeFull) => {
      this.anime = data.data;
      console.log(this.anime);

    });
  }
  //metodo para ve si hay trailer o no{
  hayTrailer(): boolean {
    if (this.anime && this.anime.trailer) {
      return true;
    }
    return false;
  }
  
}