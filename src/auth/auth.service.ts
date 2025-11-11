import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    
    constructor(private usersService: UsersService , private jwtService: JwtService){}

    async singIn(data: LoginDto){
        const user = await this.usersService.findByEmail(data.email)
        if(user?.email !== data.email){
            throw new UnauthorizedException('email invalido');
        }
        const isPassword = await bcrypt.compare(data.password , user.password)

        if(!isPassword){
            throw new NotFoundException(`Usuario ou senhas incorretas`)
        }
        const payload = { sub: user.id, email: user.email };
            console.log(payload)
            return {
                access_token: await this.jwtService.signAsync(payload),
        };
        
    }
}
