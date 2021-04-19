import {  Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common';

@Controller('scrapper')
export class ScrapperController {

    path = "chill";

    @Get('getPath')
    getPage(): string{
        return this.path;
    }

    @Get('setPath/:path64')
    setPath(@Param('path64') path64: string): string{
        this.path = path64;
        return this.path;
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version){
        if(version && version === '5'){
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

}
