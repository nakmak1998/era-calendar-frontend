import React from 'react';
import './Today.css';
import Datetime from './Datetime'

interface TodayProps {

}

class Today extends React.Component<TodayProps> {
    constructor(props: TodayProps) {
        super(props)
    }
    public render(): React.ReactNode {
        return (
            <div className='today'>
                <Datetime />
            </div>
        );
    }
}

export default Today;
