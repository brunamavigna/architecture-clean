import { Component, OnInit } from '@angular/core';
import { TesteService } from 'src/app/domain/repositories/teste.service';
import { Rusers } from 'src/app/domain/use-cases/users/rusers';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user: any

  constructor(
    private editUser: TesteService,
    private form: FormBuilder,
    private router: Router

  ) { }

 dados = this.form.group({
  name:'',
  email:'',
 surname:'',
 password:'',  
 })


  ngOnInit(): void {
    
  }


     
  cadastro(){
    this.editUser.register(this.dados.value)
    console.log(this.dados.value)
    
  }


}
