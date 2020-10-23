import React from 'react';

import { getEvents } from '../../helpers/event';
import { ItemData, Item } from './Item';
import './News.css';

// www.era-tehnopolis.ru - запрещает запросы к себе [CORS]

interface NewsState {
    news:ItemData[],
}

interface NewsProps {
    
}

class News extends React.Component<NewsProps, NewsState> {
    constructor(props : NewsProps) {
        super(props);
        this.state = {
            news: [],
        }
    }
    public async componentDidMount() : Promise<any> {
        this.setState({
            news: await getEvents('past'),
        })
    }
    public render() : React.ReactNode {
        return (
            <div className='events'>
                <div className='header'>Новости инноваций</div>
                <div className='col-first styles'>
                    <div className='col-title'>Новости техники</div>
                    <Item news={this.state.news.slice(0, 5)} />
                </div>
                <div className='col-second styles'>
                    <div className='col-title'>Новости науки</div>
                    <Item news={this.state.news.slice(0, 5)} />
                </div>
            </div>
        );
    }
}

export default News;
