import React from 'react';
import "./MainGrid.css";

interface MainGridProps{
    columnCount?:number;
    children?:React.ReactNode;
    rowCount?:number;
}

interface MainGridState{

}

class Grid extends React.Component<MainGridProps,MainGridState>{
    constructor(props:MainGridProps){
        super(props);
    }
    public static defaultProps:MainGridProps={
        columnCount:3,
        rowCount:3
    };
    public render():React.ReactNode{
        const { columnCount,children,rowCount }=this.props;
        return <div className="mainGrid" style={{
            gridTemplateColumns:`repeat(${columnCount}, 1fr)`,
            gridTemplateRows:`repeat(${rowCount}, 1fr)`
        }}>
            {children}
        </div>;
    }
}

export default Grid;