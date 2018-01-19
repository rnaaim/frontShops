import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import{SortingByDistancePipe} from './sortByDistance.pipe';

@NgModule({
    declarations:[SortingByDistancePipe],
    imports:[CommonModule],
    exports:[SortingByDistancePipe]
})

export class MypipeModule{

    static forRoot() {
        return {
            ngModule: MypipeModule,
            providers: [],
        };
    }
}