import { Action } from "@ngrx/store";
import { User } from "../../entities/user.entity";

export enum UserActionsEnum {
    Create = "[User] Create",
    Delete = "[User] Delete",
    List = "[User] List"
}

export interface UserProps {
    id?: string;
    users?: User[]
}

export class UserPropsAction implements Action {
    id?: string;
    users?: User[];
    type = '';

    constructor({ id, users }: UserProps) {
        this.id = id;
        this.users = users;
    }
}

export class UserCreate implements Action {
    type = UserActionsEnum.Create;
    user: User;
    constructor(props: { user: User }) {
        this.user = props.user;
    }
}

export class UserDelete extends UserPropsAction {
    override type = UserActionsEnum.Delete;
    constructor(props: UserProps) {
        super(props);
    }
}

export class UserList extends UserPropsAction {
    override type = UserActionsEnum.List;
    constructor(props: UserProps) {
        super(props);
    }
}