import { Injectable } from '@angular/core';
import { Users } from '../users';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/enviroment';
//import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  foundUser: Users;
  allRepos: Repository;
 
  constructor(private http: HttpClient) { 
    this.foundUser = new Users("","","","",0,0,0,"",new Date);
    this.allRepos = new Repository("","","",new Date,0,0,"");
  }
  searchUSer(searchName: string){
    interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }
    return new Promise<void>((resolve) => {
      this.http.get<Responce>('https://api.github.com/users/'+searchName+'?=token'+ this.http).toPromise().then(
        (result) => {
          this.foundUser = result;
          console.log(result);
          resolve();
        },
        
      );
    })
  }
  getReopos(searchName){
    interface Repos{
      name:string;
      html_url:string;
      forks:number;
      watchers_count:number;
      description:string;
      language:string;
      created_at:Date;
    }
    return new Promise<void>((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment).toPromise().then(
        (results) => {
          this.allRepos = results;
          resolve();
        },
        
      );
    });
  }
  }
    

  


