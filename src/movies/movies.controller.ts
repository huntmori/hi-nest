import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesSerivce: MoviesService){}

    @Get()
    getAll(): Movie[]{
        return this.moviesSerivce.getAll();
    }

    @Get("/:id") 
    getOne(@Param("id") id : string) :Movie{
        return this.moviesSerivce.getOne(id);
    }

    @Post()
    create(@Body() movieData){
        return this.moviesSerivce.create(movieData);
    }

    @Delete("/:id")
    delete(@Param('id') movieId:string) {
        return this.moviesSerivce.deleteOne(movieId);
    }

    @Patch('/:id')
    update(@Param('id') movieId: string, @Body() updateData){
        return this.moviesSerivce.update(movieId, updateData);
    }   

}
