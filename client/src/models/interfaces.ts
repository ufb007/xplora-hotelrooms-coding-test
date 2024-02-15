export interface HotelInterface {
    id: number;
    name: string;
    location: string;
    createdAt: Date;
    rooms?: RoomInterface[];
}

export interface RoomInterface {
    id: number;
    title: string;
    image: string;
    singleBed: number;
    doubleBed: number;
    wifi: number;
    tv: number;
}