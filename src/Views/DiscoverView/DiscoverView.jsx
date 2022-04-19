import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./DiscoverView.scss";
export default class DiscoverView extends Component {
    render() {
        return (
            <div className="activity discover-view">
                <header className="activity-header">
                    <div className="activity-htitle">Discover</div>
                    <div className="activity-content">
                        Hello World !        
                        <Link className="cmpns-link" to="/preview">Devel Stuff Page</Link>           
                    </div>
                </header>
            </div>
        )
    }
}
