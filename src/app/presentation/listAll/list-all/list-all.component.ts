import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TesteService } from 'src/app/domain/repositories/teste.service';
import { Rusers } from 'src/app/domain/use-cases/users/rusers';


@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {

  user: any

  constructor(
    private list: TesteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadData()
    
  }

  loadData(){
    this.list.loadData().subscribe((p: any)=>{
      return console.log(this.user = new Rusers().rnteste(p))
    })
  }

  editar(id: any){
    // this.router.navigate(['editar',id],{relativeTo: this.route})
  }

  delete(){
    
  }
}
