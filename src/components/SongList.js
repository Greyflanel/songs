import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends React.Component {
   
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content"><button className="ui button primary"
                    onClick={() => this.props.selectSong(song)}>
                        Select</button></div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        
        return <div className="ui divided list">{this.renderList()}</div>   
    }
};

const mapStateToProps = (state) => {
   
return{ songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);
/* The syntax for this export is the same as calling a function that calls a function. So this is calling the connect function, which in turn calls the SongList function. */