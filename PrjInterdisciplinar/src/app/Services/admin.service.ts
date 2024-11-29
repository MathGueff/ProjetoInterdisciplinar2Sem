import { inject, Injectable } from "@angular/core";
import { IAdmin } from "../models/admin.model";
import { UserService } from "./user.service";

@Injectable({providedIn: 'root'})

export class AdminService{
    protected userService = inject(UserService);
    admins : IAdmin[] = [
        {id: 1, userId : 1, nivel : 3},
        {id: 2, userId : 3, nivel : 2},
        {id: 3, userId : 5, nivel : 1}
    ]

    checkAdmin(id : number) : IAdmin | undefined{
        const admin = this.admins.find((a) => a.userId === id);
        return admin;
    }
}