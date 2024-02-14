import { useNavigate } from "react-router-dom";
import { HotelInterface } from "../models/interfaces";
import hotelImage from '../assets/hotel-image.png'

function Hotel({ id, name, location, rooms }: HotelInterface) {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white border border-gray-200 rounded-xl overflow-auto flex relative">
            <img src={hotelImage} alt={name} />
            <div className="p-5">
                <h2 className="text-2xl">{name}</h2>
                <p className="font-thin text-sm pt-2">{location}</p>
                <p className="font-thin text-sm pt-2">Number of rooms: {rooms?.length}</p>
                <button className="
                    font-thin 
                    px-4 py-2 
                    bg-[#1668e3] 
                    text-white 
                    rounded-2xl 
                    uppercase 
                    text-[11px] 
                    absolute 
                    bottom-3 
                    right-3
                    hover:bg-[#227950]
                    transition
                    duration-500"
                    onClick={() => navigate(`/hotel/${id}`)}>Select your room</button>
            </div>
        </div>
    );
}

export default Hotel;