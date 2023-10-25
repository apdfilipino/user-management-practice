import { Action } from '@ngrx/store';
import { User } from '../../entities/user.entity';
import { UserActionsEnum, UserPropsAction } from './user.actions';

export interface UserStoreState {
    users: User[];
}

export const initialUserState: UserStoreState = {
    users: []
}

export function userListReducer(state = initialUserState, action: Action) {
    switch(action.type) {
        case UserActionsEnum.List: {
            const newState = {
                ...state,
                users: (<UserPropsAction>action).users ?? []
            }
            return newState;
        }
        default: return initialUserState;
    }
}