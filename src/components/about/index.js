import React, { Component } from 'react';
import "./index.css";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 content text-center">
                            <h4>About Me</h4>
                            <h5>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;