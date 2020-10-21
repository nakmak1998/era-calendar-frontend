import React from 'react';

import { getEvents } from '../../helpers/event';

// www.era-tehnopolis.ru - запрещает запросы к себе

interface Event {
    title: string,
    date: string,
    time: string,
}

interface EventsState {
    futureEvents:Event[],
    pastEvents:Event[],
}

interface EventsProps {
    
}

class Events extends React.Component<EventsProps, EventsState> {
    constructor(props : EventsProps) {
        super(props);
        this.state = {
            futureEvents: [],
            pastEvents: [],
        }
    }
    public async componentDidMount() : Promise<any> {
        this.setState({
            futureEvents: await getEvents('future'),
            pastEvents: await getEvents('past'),
        })
        console.log(this.state.futureEvents)
        console.log(this.state.pastEvents)
    }
    public render() : React.ReactNode {
        return (
            <div>
                Events
                <div>
                    {this.state.futureEvents.map(el => (
                        <p key={el.time}>{el.title}</p>
                    ))}
                </div>
            </div>
        );
    }
}

export default Events;
