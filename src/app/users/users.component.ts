import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice/userservice.service'
import { Users } from '../users'
import { Repository } from '../repository'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: Users;
  repo: Repository;

  constructor(public myService: UserserviceService, private repoService: UserserviceService) { }

  searchs(searchName) {
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
        console.log(success);
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.getReopos(searchName).then(
      (results)=>{
        this.repo =this.repoService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
}

  ngOnInit(){
    this.searchs('khalid-serar');
  }

}
