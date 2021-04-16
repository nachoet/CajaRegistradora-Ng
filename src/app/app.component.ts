import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arrComidas: Array<Producto>;
  arrBebidas: Array<Producto>;

  arrProdSelect: Producto[];

  constructor() {
    this.arrProdSelect = [];

    this.arrComidas = [
      new Producto(
        'Cocido',
        'https://cdn.pixabay.com/photo/2017/04/20/03/22/japanese-2244397_960_720.jpg',
        15
      ),
      new Producto(
        'Paella',
        'https://cdn.pixabay.com/photo/2016/01/29/14/02/paella-1168003_960_720.jpg',
        25
      ),
      new Producto(
        'Pizza',
        'https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg',
        15
      ),
      new Producto(
        'Lomo al vedeo',
        'https://cdn.pixabay.com/photo/2016/03/17/23/26/italy-1264104_960_720.jpg',
        25
      ),
      new Producto(
        'Pulpo a la Gallega',
        'https://cdn.pixabay.com/photo/2017/06/16/11/41/seafood-2408849_960_720.jpg',
        23
      ),
      new Producto(
        'Hamburguesa',
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg',
        15
      ),
    ];

    this.arrBebidas = [
      new Producto(
        'Coca cola',
        'https://cdn.pixabay.com/photo/2014/09/26/19/51/drink-462776__340.jpg',
        8
      ),
      new Producto(
        'Cerveza',
        'https://cdn.pixabay.com/photo/2017/01/21/21/15/beer-1998293__340.jpg',
        10
      ),
      new Producto(
        'Agua mineral',
        'https://cdn.pixabay.com/photo/2020/04/03/11/28/water-4998513__340.png',
        5
      ),
      new Producto(
        'Vino tinto',
        'https://cdn.pixabay.com/photo/2014/11/22/18/38/wine-541922_960_720.jpg',
        15
      ),
    ];
  }

  onProductoSeleccionado($event: any) {
    // this.arrProdSelect.push($event);

    const findProduct = this.arrProdSelect.find(
      (producto) => producto.nombre === $event.nombre
    );

    if (findProduct) {
      findProduct.cantidad++;
    } else {
      $event.cantidad = 1;
      this.arrProdSelect.push($event);
    }

    // console.log(findProduct);
  }
}
