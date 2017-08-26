import { DrawerNavigator, addNavigationHelpers } from 'react-navigation'

import { HomeStackNavigator } from './HomeStackNavigator'
import { ProfileStackNavigator } from './ProfileStackNavigator'
import React from 'react'
import { connect } from 'react-redux';

export const MainDrawerNavigator = DrawerNavigator({
    HomeStackNavigator: {
        screen: HomeStackNavigator
    },
    AboutStackNavigator: {
        screen: ProfileStackNavigator
    }
})


export class ApplicationWithNavigationState extends React.Component {
    render() {
        return (<MainDrawerNavigator navigation={addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.nav })} />)
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(ApplicationWithNavigationState);