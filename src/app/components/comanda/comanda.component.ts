import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css'],
})
export class ComandaComponent implements OnInit {
  @Input() arrProductos: Producto[];

  constructor() {}

  ngOnInit(): void {}

  calculaTotales() {
    let resultado = 0;
    for (const producto of this.arrProductos) {
      resultado += producto.precio * producto.cantidad;
    }

    return resultado;
  }

  onClickBorrar(pIndice) {
    if (this.arrProductos[pIndice].cantidad === 1) {
      this.arrProductos.splice(pIndice, 1);
    } else {
      this.arrProductos[pIndice].cantidad--;
    }
  }
}
