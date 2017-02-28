import * as React from 'react';
import './Curtain.scss';

export interface ICurtainProps {
    children?: React.ReactNode;
    curtainText?: string;
    shown?: boolean;
}

export interface ICurtainState {
}

/**
 * Basic curtain component.  When shown is set, the curtain appears over the parent object.
 * Current limitation is that the parent must be set the position: relative.
 * Props: curtainText: string, shown: boolean
 */
export default class Curtain extends React.Component<ICurtainProps, ICurtainState> {
    constructor(props: ICurtainProps) {
        super(props);
    }

    public shouldComponentUpdate(nextProps: ICurtainProps, nextState: ICurtainState): boolean {
        return this.props.shown != nextProps.shown ||
            this.props.children != nextProps.children ||
            this.props.curtainText != nextProps.curtainText;
    }

    public render() {
        return (
            <div className={'curtain'} hidden={!this.props.shown}>
                <div className={'curtain-children'}>
                    {this.props.children}
                    <br />
                    <span style={{color: 'white'}}>{this.props.curtainText}</span>
                </div>
            </div>
        );
    }
}