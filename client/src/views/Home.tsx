import { useState, useEffect } from 'react'
import { gql, useQuery } from "@apollo/client";
import { HotelInterface } from '../models/interfaces';
import Hotel from '../components/Hotel';

const getHotels = gql`{
    hotels {
        id
        name
        location
        rooms {
            singleBed
            doubleBed
            images {
                src
            }
        }
    }
}`;

function Home() {
    const [hotels, setHotels] = useState<HotelInterface[]>([]);
    const { loading, data } = useQuery(getHotels);

    useEffect(() => {
        if (!loading) {
            setHotels(data.hotels);
        }
    }, [loading])

    return (
        <>
            {hotels.map(hotel => {
                return (
                    <div key={hotel.id}>
                        <p className='pb-2 font-thin'>Hotels found: {hotels.length}</p>
                        <Hotel {...hotel}  />
                    </div>
                );
            })}
        </>
    );
}

export default Home;