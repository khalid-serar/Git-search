import { Component, OnInit } from '@angular/core';
import  {UserserviceService} from '../userservice/userservice.service'
import { Repository } from '../repository'
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repo: Repository;

  constructor(public repoService: UserserviceService) { }

  repoSearch(searchName){
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

  ngOnInit() {
    this.repoSearch('khalid-serar');
  }

}
