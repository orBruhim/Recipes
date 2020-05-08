import { Ingridient } from './ingridient.model';

export class Recipe {
    constructor(public name: string,
                public description: string,
                public imagepath: string,
                public ingridients: Ingridient[],
                public fullRecipe?: string) {}
}
