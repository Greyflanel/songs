import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    render() {
        return <div>SongList</div>
    }
};

export default connect()(SongList);
/* The syntax for this export is the same as calling a function that calls a function. So this is calling the connect function, which in turn calls the SongList function. */