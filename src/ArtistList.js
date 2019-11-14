import React, { Component } from 'react';

import {
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    StyleSheet
} from 'react-native';

import ArtistBox from './ArtistBox';

import { Actions } from 'react-native-router-flux';

export default class ArtistList extends Component<Props> {
    
    constructor(props){
        super(props);
        this.state = {
            dataSource: this.props.artists
        }
    }

    // componentDidMount() {
    //     this.updateDataSource(this.props.artists);
    // }

    // componentWillReceiveProps(newProps) {
    //     if(newProps.artists !== this.props.artists) {
    //         this.updateDataSource(newProps.artists)
    //     }
    // }
    
    // updateDataSource = (data) => {
    //     this.setState({
    //         dataSource: this.state.dataSource.cloneWithRows(data)
    //     })
    // }

    handlePress(artists) {
        Actions.artistDetail({ artists })
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={this.state.dataSource}
                    renderItem={({item: artist}) => {
                        return(
                            <TouchableOpacity onPress={() => this.handlePress(artist)}>
                                <ArtistBox artist={artist} />
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={artist => artist.name}
                />
            </SafeAreaView>
// prueba@ucol.mx
            // <ListView 
            //     enableEmptySections
            //     dataSource={this.state.dataSource}
            //     renderRow={ artist => {
            //         return(
            //             <TouchableOpacity onPress={() => this.handlePress(artist)}>
            //                 <ArtistBox artist={artist} />
            //             </TouchableOpacity>
            //         )
            //     }}
            // />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,

    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
