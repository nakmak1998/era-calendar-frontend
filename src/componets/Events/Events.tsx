import React from 'react';

import { getEvents } from '../../helpers/event';
import {EventData, Event} from './Event'
import './Events.css';

// www.era-tehnopolis.ru - запрещает запросы к себе [CORS]

interface EventsState {
    futureEvents:EventData[],
    pastEvents:EventData[],
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
    }
    public render() : React.ReactNode {
        return (
            <div className='events'>
                <div className='header'>События технополиса "ЭРА"</div>
                <div className='col-first styles'>
                    <div className='col-title'>Грядущие события</div>
                    <Event events={this.state.futureEvents.slice(0, 5)} />
                </div>
                <div className='col-second styles'>
                    <div className='col-title'>Прошедшие события</div>
                    <Event events={this.state.pastEvents.slice(0, 5)} />
                </div>
            </div>
        );
    }
}

export default Events;
