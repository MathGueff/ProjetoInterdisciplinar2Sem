import { inject, Injectable } from "@angular/core";
import { IAdmin } from "../models/admin.model";
import { UserService } from "./user.service";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})

export class AdminService{
    admins : IAdmin[] = [
        {id: 1, userId : 1, nivel : 3},
        {id: 2, userId : 3, nivel : 2},
        {id: 3, userId : 5, nivel : 1}
    ]

    isAdmin(userId: number): Observable<IAdmin | null>{
        const admin = this.admins.find((a) => a.userId === userId);
        return of(admin || null);
    }
}