import { Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { ScrapperService } from './scrapper.service';

@Controller('scrapper')
export class ScrapperController {

    constructor(public scrapperService: ScrapperService) { }

    path = "chill";

    @Get('getPage/:url64')
    async getPage(@Param('url64') url64: string) {
        let url: string = Buffer.from(url64, 'base64').toString('ascii');
        return await this.scrapperService.getPageFromUrl(url);
    }

}
