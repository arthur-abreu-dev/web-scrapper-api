import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ScrapperService {

    constructor(private httpService: HttpService) { }

    public async getPageFromUrl(url: string): Promise<any> {
        //let res: any = await this.httpService.get('https://g1.globo.com/').pipe(map(response => { console.log(response.data); response.data }));

        const response = await this.httpService.get('https://g1.globo.com/').toPromise();
        console.log(response);
        return { page: response.data };
    }
}
