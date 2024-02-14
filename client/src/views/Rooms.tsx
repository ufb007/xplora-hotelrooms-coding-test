import { useState, useEffect } from 'react'
import { gql, useQuery } from "@apollo/client";
import { HotelInterface } from '../models/interfaces';
import Room from '../components/Room';

const getHotelById = gql`
    query Hotel($id: Int!) {
        getHotelById(id: $id) {
            id
            rooms {
                id
                singleBed
                doubleBed
                wifi
                tv
                images {
                    src
                }
            }
        }
    }
`;

function Rooms() {
    const [hotel, setHotel] = useState<HotelInterface>();
    const { loading, data } = useQuery(getHotelById, {
        variables: { id: 1 }
    });

    useEffect(() => {
        if (!loading) {
            setHotel(data.getHotelById);
        }
    }, [loading])
    
    return (
        <>
            {hotel?.rooms?.map(room => {
                return (<Room key={room.id} {...room} />);
            })}
        </>
    )
}

export default Rooms;