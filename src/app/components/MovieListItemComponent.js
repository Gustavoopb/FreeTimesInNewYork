import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { NavigationActions } from 'react-navigation';
import React from 'react'
import { connect } from 'react-redux'

export class MovieListItemComponent extends React.Component {
    render() {
        return (
            <TouchableOpacity style={style.content} onPress={() => this.props.option(this.props.movie)}>
                <Text style={style.title}>{this.props.movie.display_title}</Text>
                <Text style={style.subtitle}>{this.props.movie.headline}</Text>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    content: {
        padding: 12,
        backgroundColor: '#d9d9d9',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 16,
        flex: 1
    },
    subtitle: {
        fontSize: 12,
        flex: 2
    }
})

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    option: (movie) => dispatch({ type: 'Option', movie })
})

export const MovieListItem = connect(mapStateToProps, mapDispatchToProps)(MovieListItemComponent)