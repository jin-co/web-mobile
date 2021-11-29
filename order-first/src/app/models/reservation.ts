export interface Reservation {
    restaurantName:string,
    reservationName:string,
    detail: {
        date:string,
        time:string,
        tel:string
    },
    menuSelected?:string[]
}
