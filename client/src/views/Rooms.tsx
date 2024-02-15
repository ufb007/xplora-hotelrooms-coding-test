import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { HotelInterface } from '../models/interfaces';
import Room from '../components/Room';
import DatePicker from '../components/DatePicker';

const getHotelById = gql`
    query Hotel($id: Int!) {
        getHotelById(id: $id) {
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
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [hotel, setHotel] = useState<HotelInterface>();
    const { id } = useParams();

    const { loading, data } = useQuery(getHotelById, {
        variables: { id: Number(id) }
    });
    const navigate = useNavigate();

    const handleStartDateChange = (date: Date) => {
        setStartDate(new Date(date).toISOString());
    }

    const handleEndDateChange = (date: string) => {
        setEndDate(new Date(date).toISOString());
    }

    useEffect(() => {
        if (!loading) {
            setHotel(data.getHotelById);
        }
    }, [loading])
    
    return (
        <div>
            <a className='uppercase cursor-pointer hover:text-gray-400' onClick={() => navigate(-1)}>{`< Back`}</a>
            <div className='flex justify-center gap-5 mb-5'>
                <DatePicker onDateChange={handleStartDateChange} placeholder='Start Date' />
                <DatePicker onDateChange={handleEndDateChange} placeholder='End Date' />
                <button className=''>Filter</button>
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