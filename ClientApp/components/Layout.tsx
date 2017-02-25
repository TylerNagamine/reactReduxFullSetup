import * as React from 'react';
import { connect } from 'react-redux';
import { NavMenu } from './NavMenu';
import { ApplicationState } from '../store';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export interface ILayoutProps {
    body: React.ReactElement<any>;
}

const muiTheme = getMuiTheme({
    userAgent: 'all' // this.props.userAgent
});

export default class Layout extends React.Component<ILayoutProps, void> {
    public render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <NavMenu />
                    <div className='site-body container'>
                        {this.props.body}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
