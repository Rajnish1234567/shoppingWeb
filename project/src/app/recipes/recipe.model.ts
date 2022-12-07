export class Recipe{
    public name: string;
    public ingredients: string;
    public imagePath: string;

    constructor(name: string, ingredients: string, imagePath: string){
        this.name = name;
        this.ingredients = ingredients;
        this.imagePath = imagePath;
    }
}