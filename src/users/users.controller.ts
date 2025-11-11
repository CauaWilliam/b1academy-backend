import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user.create.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() user: UserCreateDto){
        this.usersService.create(user)
        console.log(user)
    }
}
