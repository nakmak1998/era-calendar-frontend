import React from 'react';
import './Covid.css';
import { getCovidStatistic } from '../../helpers/covid';
import { Region, RegionData} from './Region';

interface StatisticState {
    infected: number,
    recovered: number,
    deceased: number,
    tested: number,
    infectedByRegion: RegionData[],
}

interface CovidProps {

}

class Covid extends React.Component<CovidProps, StatisticState> {
    constructor(props: CovidProps) {
        super(props);
        this.state = {
            infected: 0,
            recovered: 0,
            deceased: 0,
            tested: 0,
            infectedByRegion: [],
        }
    }
    public async componentDidMount(): Promise<any> {
        const response = await getCovidStatistic()
        this.setState({
            infected: response.infected,
            recovered: response.recovered,
            deceased: response.deceased,
            tested: response.tested,
            infectedByRegion: response.infectedByRegion,
        })
        this.setState({ infectedByRegion: this.state.infectedByRegion.sort((a, b) => b.infected - a.infected) })
    }
    public render(): React.ReactNode {
        return (
            <div className='covidContainer'>
                <div className='header'>
                    <h3>Информация COVID-19</h3>
                </div>
                <div className='common-info'>
                    <h3>Данные по России</h3>
                    <div className='common-info-items'>
                        <div className='common-info-item'>
                            <div className='item-space'>{this.state.tested}</div>
                            <div className='item-desc'>Тестов</div>
                        </div>
                        <div className='common-info-item'>
                            <div className='item-space'>{this.state.deceased}</div>
                            <div className='item-desc'>Смертей</div>
                        </div>
                        <div className='common-info-item'>
                            <div className='item-space'>{this.state.recovered}</div>
                            <div className='item-desc'>Выздоровело</div>
                        </div>
                        <div className='common-info-item'>
                            <div className='item-space'>{this.state.infected}</div>
                            <div className='item-desc'>Подтверждено</div>
                        </div>
                    </div>
                </div>
                <div className='region-info-first region-info'>
                    <div className='regions'>
                        <Region infectedByRegion={this.state.infectedByRegion.slice(0, 10)} />
                        
                    </div>
                </div>
                <div className='region-info-second region-info'>
                    <div className='regions'>
                        <Region infectedByRegion={this.state.infectedByRegion.slice(10, 20)} />
                        
                    </div>
                </div>
            </div>

        );
    }
}

export default Covid;
