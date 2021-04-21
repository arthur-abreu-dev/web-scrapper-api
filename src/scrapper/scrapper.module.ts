import { HttpModule, Module } from '@nestjs/common';
import { ScrapperController } from './scrapper.controller';
import { ScrapperService } from './scrapper.service';

@Module({
    imports: [HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
    }),],
    controllers: [ScrapperController],
    providers: [ScrapperService]
})
export class ScrapperModule { }
