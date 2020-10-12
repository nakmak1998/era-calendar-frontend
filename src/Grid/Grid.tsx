import React from 'react';
import "./Grid.css";

interface GridProps{
    columnCount?:number;
}

interface GridState{

}

class Grid extends React.Component<GridProps,GridState>{
    constructor(props:GridProps){
        super(props);
    }
    public static defaultProps:GridProps={
        columnCount:3
    };
    public render():React.ReactNode{
        const { columnCount }=this.props;
        return <div className="grid" style={{
            gridTemplateColumns:`repeat(${columnCount}, 1fr)`
        }}>
        </div>;
    }
}

export default Grid;