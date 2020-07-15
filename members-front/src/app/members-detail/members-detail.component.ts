import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {
  selected_member = {name: '', surname: '', id: 0};
  selected_id;
  constructor(
      private route: ActivatedRoute, 
      private api: ApiService,
      private router: Router,
      private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadMember(id);
    })
  
  }

  loadMember(id){

    this.api.getMember(id).subscribe(
      data => {
        this.selected_member = data;
      },
      error =>{
        console.log("Aconteceu um erro")
      });

  }
  update(){
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        this.selected_member = data;
      },
      error =>{
        console.log("Aconteceu um erro")
      });
  }

  delete(){
    this.api.deleteMember(this.selected_id).subscribe(
      data => {
       let index;
       this.appComponent.members.forEach((e,i) => {
         if(e.id == this.selected_id)
            index = i;
       });

       this.appComponent.members.splice(index, 1);
      },
      error =>{
        console.log("Aconteceu um erro")
      });
      this.newMember();
  }

  newMember(){
    this.router.navigate(['new-member'])
  }
}
