import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
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
    getOne(@Param("id") id : number) :Movie{
        console.log(typeof id);
        return this.moviesSerivce.getOne(id);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.moviesSerivce.create(movieData);
    }

    @Delete("/:id")
    delete(@Param('id') movieId: number) {
        return this.moviesSerivce.deleteOne(movieId);
    }

    @Patch('/:id')
    update(@Param('id') movieId: number, @Body() updateData){
        return this.moviesSerivce.update(movieId, updateData);
    }   

}
