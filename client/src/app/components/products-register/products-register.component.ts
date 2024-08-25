import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products-register',
  templateUrl: './products-register.component.html',
  styleUrls: ['./products-register.component.css']
})
export class ProductsRegisterComponent {
  product = {
    description: '',
    amount: 0
  };

  private apiUrl = 'http://192.168.1.173:3005/api/products'; // URL del backend

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post(this.apiUrl, this.product).subscribe(
      response => {
        console.log('Producto registrado', response);
        // Puedes limpiar el formulario o redirigir a otra página si es necesario
        this.product = { description: '', amount: 0 };
      },
      error => {
        console.error('Error al registrar el producto', error);
      }
    );
  }
}
