import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './entities/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}
    
    @Get('getUser')
    async getUser(@Param('userId') userId: number): Promise<any[]>{
        return [];
    }

    @Get('getAllUsers')
    async getAllUsers(): Promise<any[]>{
        return this.userService.findAll();
    }

    @Post('save')
    async saveUSer(@Body() user: User){
        if(user.name !== null && user.name !== ''){
            this.userService.insert(user);
            console.log('user '+user.name+ ' saved sucessfully!');
        }else{
            console.log('user name required!');
        }
    }
}
