export class Expense { 
    public name: string; 
    public description: string; 
    public imagePath: string; 
    public amount: string; 

    constructor(name: string, desc:string, imagePath: string , amount:string){
        //built in function- assign to properties 

        this.name = name; 
        this.description = desc; 
        this.imagePath = imagePath; 
        this.amount = amount; 
    }
}