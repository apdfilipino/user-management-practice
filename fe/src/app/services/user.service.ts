import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entities/user.entity';
import { UserStoreState } from '../stores/user/user.reducers';
import { Store } from '@ngrx/store';
import { UserList } from '../stores/user/user.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string;
  constructor(private httpClient: HttpClient, private store: Store<{ usersStore: UserStoreState }>) 
  { 
    this.baseUrl = "http://localhost:3000";
  }

  public getUsers() {
    this.httpClient.get<User[]>(this.baseUrl + "/user").subscribe(u =>{
      this.store.dispatch(new UserList({ users: u }));
    });
    return this.store.select('usersStore');
  }

  public getUserById(id: string) {
    return this.httpClient.get<User>(this.baseUrl + "/user/" + id);
  }

  public patchUserById(id: string, data: User) {
    return this.httpClient.patch<User>(this.baseUrl + "/user/" + id, { ...data });
  }

  public deleteUserById(id: string) {
    return this.httpClient.delete(this.baseUrl + "/user/" + id);
  }

  public createUser(data: User) {
    return this.httpClient.post<User>(this.baseUrl + "/user", { ...data });
  }

}
