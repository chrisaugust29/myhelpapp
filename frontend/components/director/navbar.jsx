import React from 'react';
import DirectorContainter from "./director_container"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img className="ramen" src={window.ramen} />
                <DirectorContainter />
            </div>
        )
    }

};

export default Navbar