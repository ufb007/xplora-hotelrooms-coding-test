import { RoomInterface } from "../models/interfaces";

function Room({ title, image, singleBed, doubleBed, wifi, tv }: RoomInterface) {
    return (
        <div className="w-1/3 px-2 mb-5">
            <div className="bg-white rounded-2xl overflow-auto">
                <img src={`http://localhost:8080${image}`} alt={title} />
                <div className="p-5 flex flex-col gap-3 font-thin">
                    <h3 className="uppercase">{title}</h3>
                    <p className="text-sm">
                        {singleBed ? `Single Bed: ${singleBed}` : `Double Bed: ${doubleBed}`}
                    </p>
                    <p className="text-sm">Wifi: {wifi}</p>
                    <p className="text-sm">TV: {tv}</p>

                    <button className="
                    font-thin 
                    px-4 py-2 
                    bg-[#1668e3] 
                    text-white 
                    rounded-2xl 
                    uppercase 
                    text-[11px] 
                    right-3
                    hover:bg-[#227950]
                    transition
                    duration-500">Book Room</button>
                </div>
            </div>
        </div>
    )
}

export default Room;