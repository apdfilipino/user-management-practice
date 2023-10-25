import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { Observable, map } from 'rxjs';
import { UserStoreState } from '../stores/user/user.reducers';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(u => {
      this.dataSource = u.users;
    });
    console.log(`DataSource ${this.dataSource}`);
  }

  dataSource: User[];

  displayedColumns: string[] = [ 'id', 'firstName', 'lastName', 'details' ];
}
