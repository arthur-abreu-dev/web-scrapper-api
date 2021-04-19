import {  Controller, Get, Param, Query, Redirect } from '@nestjs/common';

@Controller('scrapper')
export class ScrapperController {


    @Get(':path64')
    getPage(@Param('path64') path64: string): string{
        console.log(path64);
        return 'page';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version){
        if(version && version === '5'){
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

}
