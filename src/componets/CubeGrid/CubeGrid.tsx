import React, { CSSProperties, VoidFunctionComponent } from 'react';
import "./CubeGrid.css";
import { } from '../../helpers/event';




interface CubeProps {
    front?: React.ReactNode;
    back?: React.ReactNode;
    left?: React.ReactNode;
    right?: React.ReactNode;
    bottom?: React.ReactNode;
    top?: React.ReactNode;
    style?: CSSProperties;
}

interface CubeState {
    angle: number;
    distanceCube: number;
    intervalId: number;
    mouseMove: ((evt: React.MouseEvent<HTMLDivElement>) => void) | undefined;
    mouseUp: ((evt: React.MouseEvent<HTMLDivElement>) => void) | undefined;
}

class Cube extends React.Component<CubeProps, CubeState>
{
    private refWrapper = React.createRef<HTMLDivElement>();
    private refCube = React.createRef<HTMLDivElement>();
    constructor(props: CubeProps) {
        super(props);
        this.state = {
            angle: 0,
            distanceCube: 0,
            intervalId: -1,
            mouseMove: undefined,
            mouseUp: undefined
        }
        this.timer = this.timer.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseWheel = this.onMouseWheel.bind(this);
    }
    class_query = [
        "show-front",
        "show-right",
        "show-back",
        "show-left",
        "show-front2",
    ];
    private timer(): void {
        let newAngle: number = this.state.angle + 0.2;
        this.setState({ angle: newAngle });
    }
    public move_camera_farther(): void {
        this.refWrapper.current!.classList.add('camera-move')
        window.setTimeout(() => this.rotate_cube(), 1000)
    }
    public rotate_cube(): void {
        let current_class = this.class_query.shift() || '';
        this.refCube.current!.classList.add(this.class_query[0]);
        this.refCube.current!.classList.remove(current_class);
        this.class_query.push(current_class);
        window.setTimeout(() => this.move_camera_closer(), 3500)

    }
    public move_camera_closer(): void {
        console.log('123123123123123')
        this.refWrapper.current!.classList.remove('camera-move');
        window.setTimeout(() => this.move_camera_farther(), 5000)
        if (this.class_query[0] == 'show-front2') {
            let current_class = this.class_query.shift() || '';
            this.refCube.current!.classList.add(this.class_query[0]);
            this.refCube.current!.classList.add('clear-rotate');
            this.refCube.current!.classList.remove(current_class);
            this.class_query.push(current_class);

            window.setTimeout(() => this.refCube.current!.classList.remove('clear-rotate'), 1000);
        }
    }
    public componentDidMount(): any {
        window.setTimeout(() => this.move_camera_farther(), 3000)
        // const intervalId=window.setInterval(this.timer,16.7);
        // this.setState({intervalId:intervalId});
    }
    public componentDidUpdate(): void {

    }
    public componentWillUnmount(): void {
        clearInterval(this.state.intervalId);
    }
    private onMouseMove(evt: React.MouseEvent<HTMLDivElement>): void {
        const newAngle: number = this.state.angle + evt.movementX;
        this.setState({
            angle: newAngle
        });
    }
    private onMouseDown(evt: React.MouseEvent<HTMLDivElement>): void {
        this.setState({
            mouseMove: this.onMouseMove,
            mouseUp: this.onMouseUp
        });
    }
    private onMouseUp(evt: React.MouseEvent<HTMLDivElement>): void {
        this.setState({
            mouseMove: undefined,
            mouseUp: undefined
        });
    }
    private onMouseWheel(evt: React.WheelEvent<HTMLDivElement>) {
        const newDistance: number = this.state.distanceCube + 0.5 * evt.deltaY;
        console.log(newDistance);
        this.setState({
            distanceCube: newDistance
        });
    }
    public render(): React.ReactNode {
        const { back, bottom, children, front, left, right, top, style } = this.props;
        const { angle, mouseMove, mouseUp, distanceCube } = this.state;
        return <div className="scene"
            onMouseUp={mouseUp}
            onMouseMove={mouseMove}
            onMouseDown={this.onMouseDown}
            onWheel={this.onMouseWheel}>
            <div className="cubeWrapper" ref={this.refWrapper}>
                <div className="cube show-front" ref={this.refCube}>
                    <div className="cube__face--front">{front}</div>
                    <div className="cube__face--back">{back}</div>
                    <div className="cube__face--right">{right}</div>
                    <div className="cube__face--left">{left}</div>
                    <div className="cube__face--top"></div>
                </div>
            </div>
        </div>;


        //     <div className="scene" 
        //                                   onMouseUp={mouseUp} 
        //                                   onMouseMove={mouseMove}
        //                                   onMouseDown={this.onMouseDown}
        //                                   onWheel={this.onMouseWheel}>
        //         <div className="cubeWrapper" style={{
        //             transform:`translateZ(${-4000}px) translateY(${1000}px)`
        //         }}>
        //             <div className="cube" style={
        //                 { transform:`rotateY(${angle}deg)`
        //                 }} >
        //                 <div className="cube__face--front">{front}</div>
        //                 <div className="cube__face--back">{back}</div>
        //                 <div className="cube__face--right">{right}</div>
        //                 <div className="cube__face--left">{left}</div>
        //                 <div className="cube__face--top"></div>
        //             </div>
        //         </div>
        // </div>;
    }
}

export default Cube;