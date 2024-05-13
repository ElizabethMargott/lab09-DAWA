import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit {
  valor: number = 0;

  constructor(){}
  ngOnInit(): void {

  }

  incrementar(): void {
    this.valor++;
  }

  disminuir(): void{
    this.valor--;
  }

}
