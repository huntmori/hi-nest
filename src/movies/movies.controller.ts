import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return 'This will return all movies';
    }

    @Get("/:id") 
    getOne(@Param("id") id : string){
        return `this will return one movie with the id : ${id}`;
    }

    @Post()
    create(){
        return 'this will create one movie';
    }

    @Delete("/:id")
    delete(@Param('id') movieId:string) {
        return `This will delete a movie wit the id :${movieId}`;
    }

    @Patch('/:id')
    update(@Param('id') movieId: string){
        return `this will update one movie id:${movieId}`;
    }   
}
