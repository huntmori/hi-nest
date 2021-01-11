import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { App } from './app';
//commit test
/**@데코레이터
 * 클래스에 함수기능을 추가
 */
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [App],
})
export class AppModule {}
