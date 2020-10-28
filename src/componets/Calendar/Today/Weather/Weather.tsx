import React from 'react';
import getDataFromWeather from '../../../../helpers/weather-api';
import './Weather.css';
import cloudSrc from '../../../../../assets/cloud03@4x.png'

interface WeatherState {
    temperature?: number,
    iconUrl?: string,
}

interface WeatherProps {

}


class Weather extends React.Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
        super(props)
        this.state = {
            temperature: 0,
            iconUrl: cloudSrc,
        }
    }
    public async componentDidMount(): Promise<void> {
        try {
            const data = await getDataFromWeather();
            this.setState({ temperature: data.temperature, iconUrl: data.iconUrl});
            setInterval(async () => {
                const data = await getDataFromWeather();
                this.setState({ temperature: data.temperature, iconUrl: data.iconUrl});
            }, 60 * 30 * 1000);
        } catch (error) {
            console.log(error);
        }
    }
    public render(): React.ReactNode {
        return (
            <div className='weather'>
                <div className='degree'>{this.state.temperature} C</div>
                <div className='icon'>
                    <img src={this.state.iconUrl} alt='icon'/>
                </div>
            </div>
        )
    }
}

export default Weather;
