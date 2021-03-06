import React, { CSSProperties, VoidFunctionComponent } from 'react';
import "./CubeGrid.css";
import {} from '../../helpers/event';




interface CubeProps{
    front?:React.ReactNode;
    back?:React.ReactNode;
    left?:React.ReactNode;
    right?:React.ReactNode;
    bottom?:React.ReactNode;
    top?:React.ReactNode;
    style?:CSSProperties;
}

interface CubeState{
    angle:number;
    distanceCube:number;
    intervalId:number;
    mouseMove:((evt:React.MouseEvent<HTMLDivElement>)=>void)|undefined;
    mouseUp:((evt:React.MouseEvent<HTMLDivElement>)=>void)|undefined;
}

class Cube extends React.Component<CubeProps,CubeState>
{
    constructor(props:CubeProps){
        super(props);
        this.state={
            angle:0,
            distanceCube:0,
            intervalId:-1,
            mouseMove:undefined,
            mouseUp:undefined
        }
        this.timer=this.timer.bind(this);
        this.onMouseMove=this.onMouseMove.bind(this);
        this.onMouseDown=this.onMouseDown.bind(this);
        this.onMouseUp=this.onMouseUp.bind(this);
        this.onMouseWheel=this.onMouseWheel.bind(this);
    }
    private timer():void{
        let newAngle:number=this.state.angle+0.2;
        this.setState({angle:newAngle});
    }
    public componentDidMount():any{
       // const intervalId=window.setInterval(this.timer,16.7);
        //this.setState({intervalId:intervalId});
    }
    public componentDidUpdate():void{
        
    }
    public componentWillUnmount():void{
        //clearInterval(this.state.intervalId);
    }
    private onMouseMove(evt:React.MouseEvent<HTMLDivElement>):void{
        const newAngle:number=this.state.angle+evt.movementX;
        this.setState({
            angle:newAngle
        });
    }
    private onMouseDown(evt:React.MouseEvent<HTMLDivElement>):void{
        this.setState({
            mouseMove: this.onMouseMove,
            mouseUp:this.onMouseUp
        });
    }
    private onMouseUp(evt:React.MouseEvent<HTMLDivElement>):void{
        this.setState({
            mouseMove: undefined,
            mouseUp:undefined
        });
    }
    private onMouseWheel(evt:React.WheelEvent<HTMLDivElement>){
        const newDistance:number=this.state.distanceCube+0.5*evt.deltaY;
        console.log(newDistance);
        this.setState({
            distanceCube:newDistance
        });
    }
    public render():React.ReactNode{
        const {back,bottom,children,front,left,right,top,style}=this.props;
        const {angle,mouseMove,mouseUp,distanceCube} =this.state;
            return <div className="scene" 
                                          onMouseUp={mouseUp} 
                                          onMouseMove={mouseMove}
                                          onMouseDown={this.onMouseDown}
                                          onWheel={this.onMouseWheel}>
                <div className="cubeWrapper" style={{
                    transform:`translateZ(${2*distanceCube}px) translateY(${-0.5*distanceCube}px)`
                }}>
                    <div className="cube" style={
                        { transform:`rotateY(${angle}deg)`
                        }} >
                        <div className="cube__face--front">{front}</div>
                        <div className="cube__face--back"></div>
                        <div className="cube__face--right"></div>
                        <div className="cube__face--left"></div>
                        <div className="cube__face--top"></div>
                    </div>
                </div>
        </div>;
    }
}

export default Cube;