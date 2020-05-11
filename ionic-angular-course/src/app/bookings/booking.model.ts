export class Booking {
    constructor(
        // permet de lier automatiquement cet argument à une propriété de classe portant le même nom.
        public id: string,
        public placeId: string,
        public userId: string,
        public placeTitle: string,
        public guestNumber: number
        ) {}
}