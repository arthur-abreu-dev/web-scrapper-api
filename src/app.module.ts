import { HttpModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapperModule } from './scrapper/scrapper.module';
import { UserModule } from './user/user.module';
import { LogerMiddlware } from './logger.middleware';

@Module({
  imports: [ScrapperModule, UserModule, HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogerMiddlware).forRoutes('scrapper');
  }
}
