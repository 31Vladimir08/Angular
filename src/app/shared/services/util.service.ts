import { Injectable } from "@angular/core"

@Injectable()
export class UtilsService {
    range(start: number, end: number): number[] {
        const result = [...Array(end).keys()].map(el => el + start)
        return result
    }
}