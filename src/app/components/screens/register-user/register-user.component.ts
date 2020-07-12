import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public nome: string;
  public email: string;
  public cpf: string;
  public cargo: string;
  public senha: string;
  public confirmarSenha: string;
  private showInputErrors: boolean;

  constructor() {
    this.nome = '';
    this.email = '';
    this.cpf = '';
    this.cargo = '';
    this.senha = '';
    this.confirmarSenha = '';
    this.showInputErrors = false;
  }

  ngOnInit(): void {
  }

}
