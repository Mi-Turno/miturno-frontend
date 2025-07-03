import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LandingRoutingModule } from '../../landing-routing.module';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,
    LandingRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
   ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


mailEnviado = false;

formularioContacto = new FormGroup ({
  name: new FormControl('', Validators.required),
  bussines: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  message: new FormControl('', [Validators.required, Validators.minLength(10)])
})

// emailService: EmailService= inject(EmailService)
// crearEmail(): EmailContactoInterface {
// return{
//   nombre: this.formularioContacto.get('nombre')?.value || '',
//   negocio: this.formularioContacto.get('negocio')?.value || '',
//   email:this.formularioContacto.get('email')?.value || '',
//   mensaje: this.formularioContacto.get('mensaje')?.value || '',
// }
// }


// enviarMail() {
//   const email: EmailContactoInterface = this.crearEmail();
//   this.emailService.postEnviarEmailContacto(email).subscribe({
//     next: (response) => {
//       this.bloquearContacto();
//     }})
// }


bloquearContacto() {
  this.mailEnviado = true;
  this.formularioContacto.get('nombre')?.disable();
  this.formularioContacto.get('negocio')?.disable();
  this.formularioContacto.get('email')?.disable();
  this.formularioContacto.get('mensaje')?.disable();
  // Swal.fire({
  //   icon: 'success',
  //   title: '¡Mail enviado de forma correcta!',
  //   showConfirmButton: false,
  //   timer: 1500
  // })
  //alert("Mail envíado de forma correcta");
}

}
