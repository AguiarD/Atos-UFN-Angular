import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-ngfor',
  templateUrl: './ngif-ngfor.component.html',
  styleUrls: ['./ngif-ngfor.component.css']
})
export class NgifNgforComponent implements OnInit {

  numero: number = 1;
  vetorNumeros = [1, 2, 3, 4, 5, 6];
  Nomes = ["Douglas", "homer", "Bart", "Lisa"];

  constructor() { }

  ngOnInit(): void {
  }

}
