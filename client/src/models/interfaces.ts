export interface HotelInterface {
    id: number;
    name: string;
    location: string;
    createdAt: Date;
    rooms?: RoomType[];
}

export type RoomType = {
    id: number,
    title: string;
    image: string;
    singleBed: number,
    doubleBed: number,
    wifi: number,
    tv: number
}

export type ImageType = {
    src: string
}