import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(multiItem => multiItem[field].toLowerCase().includes(value.toLowerCase()));
    }
}