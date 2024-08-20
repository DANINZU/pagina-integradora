import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any = null;
  private apiUrl = 'http://localhost:3000/api/products'; // URL del backend

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.error('Error al cargar los productos', error);
      }
    );
  }

  editProduct(product: any) {
    this.selectedProduct = { ...product };
  }

  updateProduct() {
    if (this.selectedProduct) {
      this.http.put(`${this.apiUrl}/${this.selectedProduct.id}`, this.selectedProduct).subscribe(
        response => {
          console.log('Producto actualizado', response);
          this.loadProducts();
          this.selectedProduct = null;
        },
        error => {
          console.error('Error al actualizar el producto', error);
        }
      );
    }
  }

  deleteProduct(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      response => {
        console.log('Producto eliminado', response);
        this.loadProducts();
      },
      error => {
        console.error('Error al eliminar el producto', error);
      }
    );
  }
}
