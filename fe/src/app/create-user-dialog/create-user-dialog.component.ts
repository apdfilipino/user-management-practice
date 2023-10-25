import { Component } from '@angular/core';
import { User } from '../entities/user.entity';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent {
  
  user: User = {
    firstName: "",
    lastName: ""
  };
  
}
