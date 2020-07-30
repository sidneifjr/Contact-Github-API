import React from 'react';
import Image from '../Image';

import './loader.scss';

function Loader() {
    return (
        // <div className={"loader " + (this.props.loaded ? "hidden" : "")}>
        <div className="loader">
            <Image src={require("../img/loader.svg")} alt="Loader" />
        </div>
    )
}

// Loader.defaultProps = {
//     loaded: false
// }

export default Loader;
