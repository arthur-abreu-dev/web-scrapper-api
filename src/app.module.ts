import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapperModule } from './scrapper/scrapper.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ScrapperModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
