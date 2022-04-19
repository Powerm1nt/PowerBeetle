import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./TemplateView.scss";
export default class TemplateView extends Component {
    render() {
        return (
            <div className="activity">
                <header className="activity-header">
                    <div className="activity-htitle">Discover</div>
                    <div className="activity-content">
                        Hello World !        
                    </div>
                </header>
            </div>
        )
    }
}
