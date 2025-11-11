import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { WhitelabelEnum } from "../interface/user.create.interface";




export class UserCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;
    
    @IsNotEmpty()
    @IsString()
    whitelabel: WhitelabelEnum;

    @IsNumber()
    qtdTreinamentos: number
}
