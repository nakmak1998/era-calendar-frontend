import React from 'react';
import './Region.css';

interface RegionData {
    region: string,
    infected: number,
    recovered: number,
    deceased: number,
}

interface RegionProps {
    infectedByRegion: RegionData[]
}

class Region extends React.Component<RegionProps> {
    constructor(props: RegionProps) {
        super(props)
    }
    public render(): React.ReactNode {
        return (
            <div>
                {this.props.infectedByRegion.map(el => (
                    <div className='region' key={el.region}>
                        <div className='region-title'>{el.region}</div>
                        <div className='region-data'>{el.infected}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export { Region, RegionData };