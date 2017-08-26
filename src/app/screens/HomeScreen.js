import { AppRegistry, Button, FlatList, Text, TextInput, View } from 'react-native'

import { MenuButton } from '../components/MenuButton'
import { MovieListItem } from '../components/MovieListItemComponent'
import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

export class HomeScreenComponent extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerLeft: <MenuButton navigation={navigation} />
    })

    constructor(props) {
        super(props)
        this.state = { text: "" }
    }

    componentWillMount() {
        this._loadMovies()
    }

    componentWillUnmount() {
        this.props.clean()
    }

    _loadMovies() {
        axios.get('/movies/v2/reviews/search.json', { params: { offset: this.props.results.length } })
            .then(res => {
                this.props.moviesReponse(res.data)
            })
            .catch(err => alert(err))
    }


    _search(query) {
        axios.get(`/movies/v2/reviews/search.json`, { params: { query, order: 'by-title' } })
            .then(res => {
                this.props.moviesReponse(res.data)
            })
            .catch(err => alert(err))
    }

    render() {
        const { navigate } = this.props.navigation
        this.props.results = this.props.results.map((value, index) => { value.key = index; return value })
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#e5e5e5', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                        style={{ margin: 5, flex: 2 }}
                        placeholder="Search"
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <Button color="#3f3f3f" title="Search" onPress={() => this._search(this.state.text)} />
                </View>
                <FlatList style={{ backgroundColor: '#e5e5e5', flex: 2 }}
                    data={this.props.results}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#f1f1f1' }}></View>}
                    renderItem={({ item }) => <MovieListItem movie={item}></MovieListItem>}
                    onEndReached={() => this._loadMovies()}

                />
                <Text style={{ padding: 5, fontSize: 10 }}>{this.props.copyright}</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    results: state.movies.results,
    copyright: state.movies.copyright
})
const mapDispatchToProps = dispatch => ({
    moviesReponse: (data) => dispatch({ type: 'MoviesResponse', data }),
    clean: (data) => dispatch({ type: 'Clean' })
})

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent)