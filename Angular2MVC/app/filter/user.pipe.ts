import { PipeTransform, Pipe } from '@angular/core';
import { IUser } from '../Model/user';

@Pipe({
    name: 'userFilter'
})
//Custom Angular pipe
//filter for searching for users by first or last name. 
export class UserFilterPipe implements PipeTransform {

    transform(value: IUser[], filter: string): IUser[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((app: IUser) =>
            //this searches an IUser's first or last name and sees if the substring filter is within their name
            app.FirstName != null && app.FirstName.toLocaleLowerCase().indexOf(filter) != -1
            || app.LastName != null && app.LastName.toLocaleLowerCase().indexOf(filter) != -1

        ) : value;

    }
}