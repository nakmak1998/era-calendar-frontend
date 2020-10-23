import React from 'react';
import './Event.css'

interface EventData {
    imgUrl: string,
    title: string,
    date: string,
    time: string,
}

interface EventProps {
    events: EventData[],
}

class Event extends React.Component<EventProps> {
    constructor(props: EventProps) {
        super(props)
    }
    public render(): React.ReactNode {
        return (
            <div>
                {this.props.events.map(el => (
                    <div className='event' key={el.title}>
                        <div className='event-img'>
                            <img src={el.imgUrl} alt='el.title'/>
                        </div>
                        <div className='event-data'>
                            <div className='event-title'>{el.title}</div>
                            <div className='event-date'>{el.date}</div>
                            <div className='event-time'>{el.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export { Event, EventData };
