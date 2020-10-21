import React from 'react';
import './Today.css';

interface TodayProps {

}


class Today extends React.Component<TodayProps> {
    constructor(props: TodayProps) {
        super(props)
    }
    public render(): React.ReactNode {
        return (<div className='today'>Today</div>);
    }
}

export default Today;
