import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { HotelInterface } from '../models/interfaces';
import Room from '../components/Room';
import DatePicker from '../components/DatePicker';

const getHotelById = gql`
    query Hotel($id: Int!, $startDate: DateTime, $endDate: DateTime) {
        getHotelById(id: $id, startDate: $startDate, endDate: $endDate) {
            id
            rooms {
                id
                title
                image
                singleBed
                doubleBed
                wifi
                tv
            }
        }
    }
`;

function Rooms() {
    const [startDate, setStartDate] = useState<string | null>(null);
    const [endDate, setEndDate] = useState<string | null>(null);
    const { id } = useParams();
    const [additionalParams, setAdditionalParams] = useState({ id: Number(id) });

    const { loading, data, refetch } = useQuery(getHotelById, {
        variables: additionalParams
    });

    const navigate = useNavigate();

    const handleStartDateChange = (date: Date) => {
        setStartDate(new Date(date).toISOString());
    }

    const handleEndDateChange = (date: string) => {
        setEndDate(new Date(date).toISOString());
    }

    const dateFilterHandler = async () => {
        if (startDate && endDate) {
            setAdditionalParams((prevData) => ({ ...prevData, startDate, endDate }));

            refetch({
                id: Number(id),
                startDate,
                endDate
            });
        }
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const hotel: HotelInterface = data && data.getHotelById;
    
    return (
        <div>
            <a className='uppercase cursor-pointer hover:text-gray-400' onClick={() => navigate(-1)}>{`< Back`}</a>
            <div className='flex justify-center gap-5 mb-5'>
                <DatePicker onDateChange={handleStartDateChange} placeholder='Start Date' />
                <DatePicker onDateChange={handleEndDateChange} placeholder='End Date' />
                <button className='
                    font-thin 
                    px-4 py-2 
                    bg-[#1668e3] 
                    text-white 
                    rounded-2xl 
                    uppercase 
                    text-[11px]
                    hover:bg-[#227950]
                    transition
                    duration-500'
                    onClick={dateFilterHandler}>Filter</button>
            </div>
            <div className='flex flex-wrap'>
                {hotel?.rooms?.map(room => {
                    return (<Room key={room.id} {...room} />);
                })}
            </div>
        </div>
    )
}

export default Rooms;