import {Shop} from './shop.model';
import { Pipe, PipeTransform } from '@angular/core';

// Credits to https://github.com/tomtobac/sorting-table  for the sorting function

@Pipe({
    name: 'sortDistance'
})
export class SortingByDistancePipe implements PipeTransform {

    transform(shops: Shop[], path: string[], order: number): Shop[] {

        if (!shops ||!order) return shops;

        return shops.sort((a: Shop, b: Shop) => {

            path.forEach(property => {
                a = a[property];
                b = b[property];
            })

            return a > b ? order : order * (- 1);
        })
    }

}