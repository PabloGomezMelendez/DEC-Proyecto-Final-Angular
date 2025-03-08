import { Component, OnInit } from '@angular/core';
import { Ianime } from '../../interface/ianime';
import { TopSeviceService } from '../../services/top-sevice.service';
import { Irespuesta } from '../../interface/irespuesta';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  animes!: Ianime[];

  constructor(private serviciosProductos: TopSeviceService) { }

  ngOnInit(): void {
    this.serviciosProductos.obtenerTopAnime().subscribe((data: Irespuesta) => {
      this.animes = data.data;
    });
  }
}
