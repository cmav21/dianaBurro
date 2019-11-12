import React, { Component } from 'react';

import {
    ListView,
    TouchableOpacity
} from 'react-native';

import ArtistBox from './ArtistBox';

import { Actions } from 'react-native-router-flux';

export default class ArtistList extends Component<Props> {
    
    constructor(props){
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds
        }
    }

    componentDidMount() {
        this.updateDataSource(this.props.artists);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.artists !== this.props.artists) {
            this.updateDataSource(newProps.artists)
        }
    }
    
    updateDataSource = (data) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }

    handlePress(artists) {
        Actions.artistDetail({ artists })
    }

    render() {
        return(
            <ListView 
                enableEmptySections
                dataSource={this.state.dataSource}
                renderRow={ artist => {
                    return(
                        <TouchableOpacity onPress={() => this.handlePress(artist)}>
                            <ArtistBox artist={artist} />
                        </TouchableOpacity>
                    )
                }}
            />
        );
    }
}
