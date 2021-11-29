export interface Reservation {
    restaurantName:string,
    reservationName:string,
    detail: {
        date:string,
        time:string,
        tel:string
    },
    numberOfPeople:number,
    menuSelected?:string[]
}
