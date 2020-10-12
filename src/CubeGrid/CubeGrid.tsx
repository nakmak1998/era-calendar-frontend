import React from 'react';
import "./CubeGrid.css";

interface CubeGridProps{
    front?:React.ReactNode;
    back?:React.ReactNode;
    left?:React.ReactNode;
    right?:React.ReactNode;
    bottom?:React.ReactNode;
    top?:React.ReactNode;
}

interface CubeGridState{
    angle:number;
}

class CubeGrid extends React.Component<CubeGridProps,CubeGridState>
{
    constructor(props:CubeGridProps){
        super(props);
    }
    public render():React.ReactNode{
        const {back,bottom,children,front,left,right,top}=this.props;
        return <div className="scene">
            
        </div>;
    }
}

export default CubeGrid;