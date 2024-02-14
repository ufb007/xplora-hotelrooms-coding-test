export interface HotelInterface {
    id: number;
    name: string;
    location: string;
    createdAt: Date;
    rooms?: RoomType[];
}

export type RoomType = {
    id: number,
    singleBed: number,
    doubleBed: number,
    wifi: number,
    tv: number,
    images: ImageType[]
}

export type ImageType = {
    src: string
}