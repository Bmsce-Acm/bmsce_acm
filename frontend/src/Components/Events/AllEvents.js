import React, { useState } from 'react';
import { getAllEvents } from '../../Api/eventsApi';
import CardItem from '../Home/CardItem';

const AllEvents = () => {

    const allEvents = getAllEvents();
    const years_list = [...new Set(allEvents.map((eve) => { return eve.edate.year; }))];

    const thiYear = new Date().getFullYear();
    const this_year_events = allEvents.filter((eve) => {
        return eve.edate.year === `${thiYear}`;
    });
    const [events, setEvents] = useState(this_year_events);

    const filterEvents = (this_year) => {
        const updatedEvents = allEvents.filter((curEve) => {
            return curEve.edate.year === this_year
        });
        setEvents(updatedEvents);
    }

    return (
        <div className='events__section'>
            <div className='years_list'>
                {
                    years_list.length > 1 &&
                    years_list.map((year) => {
                        return (
                            <>
                                <button onClick={() => filterEvents(`${year}`)} key={{ year }}>
                                    {year}
                                </button>
                            </>
                        )
                    })
                }
            </div>
            <div className="events__main">
                <div className='eve__container'>
                    <div className="eve__wrapper">
                        {
                            events.map((event) => {
                                return (
                                    <div className='mn_eve_crd'>
                                        <div className='card_eve'>
                                            <div className='eve_img'>
                                                <img src={event.image} />
                                            </div>
                                            <div className='eve_cnt'>
                                                <div className='eve_hd'>
                                                    <h1>{event.title}</h1>
                                                </div>
                                                <div className='eve_date'>
                                                    <span>{event.edate.date} {event.edate.month} {event.edate.year}</span>
                                                </div>
                                                <div className='eve_desc'>
                                                    <span>{event.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    // <ul className="cards__items">
                                    //     <CardItem
                                    //         src={event.image}
                                    //         text={event.title}
                                    //         label={event.label}
                                    //     />
                                    // </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllEvents