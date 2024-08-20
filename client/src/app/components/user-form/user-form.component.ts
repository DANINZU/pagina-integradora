import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.registerUser(this.user).subscribe(
        (response: any) => {
          alert('Usuario registrado exitosamente'); 
          console.log('Usuario registrado exitosamente', response);
          this.user = { name: '', email: '', password: '' };  // Limpiar el formulario después del registro
        },
        (error: any) => {
          console.error('Error al registrar el usuario', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
