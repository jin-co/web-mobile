export interface Reservation {
    restaurantName:string,
    detail: {
        date:string,
        time:string,
        tel:string
    },
    menuSelected:string[]
}
