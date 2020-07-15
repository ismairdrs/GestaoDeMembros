import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  selected_member = {name: '', surname: '', id: 0};
  members = [
    {name: 'member1', id: 1, surname: 'ciclano', photo:'http:ww.asodfjasodif.com/photo'},
    {name: 'member2', id: 2, surname: 'ciclano2', photo:'http:ww.asodfjasodif.com/photo'},
    {name: 'member3', id: 3, surname: 'ciclano3', photo:'http:ww.asodfjasodif.com/photo'},
    {name: 'member4', id: 4, surname: 'ciclano4', photo:'http:ww.asodfjasodif.com/photo'}
  ];

  constructor(private api: ApiService, private router: Router ){
    this.getMembers();
  };


  getMembers = () => {
    this.api.getAllMembers().subscribe(
    data => {
      this.members = data
    },
    error =>{
      console.log("Aconteceu um erro")
    });
  };

  memberClicked = (member) =>{
    this.router.navigate(['member-detail', member.id]);
  };

}
