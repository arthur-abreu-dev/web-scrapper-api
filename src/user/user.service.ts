import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.dto";

@Injectable()
export class UserService{
    private readonly users: User[] = [];

    insert(user: User){
        this.users.push(user);
    }

    findAll(): User[]{
        return this.users;
    }
}