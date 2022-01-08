import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  n: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  obtemValor(n: number) {
    this.n = n;
  }

}
