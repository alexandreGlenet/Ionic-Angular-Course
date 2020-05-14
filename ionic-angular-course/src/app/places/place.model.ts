export class Place {
    constructor (
        // permet de lier automatiquement cet argument à une propriété de classe portant le même nom.
        public id: string, 
        public title: string, 
        public description: string, 
        public imageUrl: string, 
        public price: number,
        public availableFrom: Date,
        public availableTo: Date
        ) { 

    }
}