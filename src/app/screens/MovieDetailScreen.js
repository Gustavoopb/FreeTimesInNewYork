import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { connect } from 'react-redux'

export class MovieDetailScreenComponent extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        return {
            title: navigation.state.params.movie.display_title,
        }
    }

    render() {
        const { movie } = this.props
        return (
            <View style={style.content}>
                <View style={style.banner} >
                    <View style={style.viewWrapper} >
                        <Image
                            source={{ uri: movie.multimedia.src }}
                            style={{
                                borderRadius: 5,
                                width: movie.multimedia.width,
                                height: movie.multimedia.height
                            }} />
                    </View>
                    <Text style={{ fontSize: 22 }}>{movie.display_title}</Text>
                </View>
                <View style={style.review}>
                    <View style={style.line}>
                        <Text style={style.label}>Review:</Text>
                        <Text style={style.reviewText}>{movie.headline.replace('Review: ', '')}</Text>
                    </View>

                    <View style={[style.line, style.borderTop]}>
                        <Text style={style.label}>Summary short:</Text>
                        <Text style={style.reviewText}>{movie.summary_short}</Text>
                    </View>

                    <View style={[style.line, style.borderTop]}>
                        <Text style={style.label}>Byline:</Text>
                        <Text style={style.reviewText}>{movie.byline}</Text>
                    </View>

                    <View style={[style.line, style.borderTop]}>
                        <Text style={style.label}>Suggested:</Text>
                        <Text style={style.reviewText}>{`${movie.link.suggested_link_text}. (${movie.link.url})`}</Text>
                    </View>
                </View>
            </View>

        )
    }
}

const mapStateToProps = state => ({
    movie: state.movies.movie
})

const mapDispatchToProps = dispatch => ({
})

const style = StyleSheet.create({
    content: { backgroundColor: '#e5e5e5', flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
    banner: { flex: 2, justifyContent: 'space-around', alignItems: 'center' },
    viewWrapper: {
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        shadowColor: '#000'
    },
    review: { flex: 3, justifyContent: 'flex-start', alignItems: 'center', alignContent: 'flex-start' },
    reviewText: { flex: 3, fontSize: 12 },
    label: { flex: 1, fontSize: 14 },
    line: { padding: 10, flexDirection: 'row', backgroundColor: '#eee' },
    borderTop: { borderTopWidth: 2, borderTopColor: '#f1f1f1' }

})

export const MovieDetailScreen = connect(mapStateToProps, mapDispatchToProps)(MovieDetailScreenComponent)