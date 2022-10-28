import { TemplateLiteral } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { TesteService } from 'src/app/domain/repositories/teste.service';
import { Rusers } from 'src/app/domain/use-cases/users/rusers';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  // informações: any = [{
  //   id: '10',
  //   login: 'bruna',
  //   password: 'brnfnfjf'
  // },
  // {
  //   id: '10',
  //   login: 'bruna',
  //   password: 'brnfnfjf'
  // },
  // {
  //   id: '10',
  //   login: 'bruna',
  //   password: 'brnfnfjf'
  // },
  // {
  //   id: '10',
  //   login: 'bruna',
  //   password: 'brnfnfjf'
  // }

  //   ]

  user: any 

  constructor(
    private teste:TesteService,
    private form: FormBuilder
  ) { }

  dados = this.form.group({
    name: '',
    email:'',
    surname:'',
    password: '',
  })

  ngOnInit(): void {
    
  } 
    
    
  cadastro(){
    this.teste.register(this.dados.value)
    console.log(this.dados.value)
    
  }



}
