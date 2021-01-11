import {IsNumber, IsOptional, isString, IsString} from "class-validator";

export class CreateMovieDto
{
    @IsString() 
    readonly title: string;

    @IsNumber() 
    readonly year: number;

    @IsOptional()
    readonly genres: string[];
}