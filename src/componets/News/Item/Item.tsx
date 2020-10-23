import React from 'react';
import './Item.css'

interface ItemData {
    imgUrl: string,
    title: string,
    date: string,
    time: string,
}

interface ItemProps {
    news: ItemData[],
}

class Item extends React.Component<ItemProps> {
    constructor(props: ItemProps) {
        super(props)
    }
    public render(): React.ReactNode {
        return (
            <div>
                {this.props.news.map(el => (
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

export { Item, ItemData };
