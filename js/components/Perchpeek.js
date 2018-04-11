import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Perchpeek extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Perchpeek</div>

                            <div className="panel-body">
                                Hello!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Perchpeek />, document.getElementById('main'));
}
