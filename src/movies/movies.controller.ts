import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return 'This will return all movies';
    }

    
    @Get('search')
    serach(@Query('year') year:string ) {
        return `We are searchfing for a movie made after ${year}`;
    }

    @Get("/:id") 
    getOne(@Param("id") id : string){
        return `this will return one movie with the id : ${id}`;
    }

    @Post()
    create(@Body() movieData){
        return movieData;
    }

    @Delete("/:id")
    delete(@Param('id') movieId:string) {
        return `This will delete a movie wit the id :${movieId}`;
    }

    @Patch('/:id')
    update(@Param('id') movieId: string, @Body() updateData){
        return {
            updateMovie:movieId,
            ...updateData
        };
    }   

}
