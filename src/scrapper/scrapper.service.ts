import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ScrapperService {

    constructor(private httpService: HttpService) { }

    public async getPageFromUrl(url: string): Promise<any> {
        console.log(url);
        const response = await this.httpService.get(url).toPromise();
        return { page: response.data };
    }
}
