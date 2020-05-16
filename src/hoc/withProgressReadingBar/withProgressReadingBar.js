// Przygotuj HOCa withProgressReadingBar, który:
// - tworzy nad komponentem, który przyjmuje progress bar, który jest niebieski o wysokości 5px
// - progress bar odzwierciedla swoją długością wysokość przeskrolowanego elementu child
// - progress bar powienien być sticky do górnej krawędzi ekranu w obrębie elementu child
// - owrapowany komponent powinien mieć maksymalnie wysokość 50% wysokości ekranu

import React from 'react';
import './withProgressReadingBar.css';

const withProgressReadingBar = (Component) => {

    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                progressBarWidth: '0'
            }
        }

        handleScrollBarWidth = (event) => {
            const scrollTop = event.target.scrollTop;
            const scrollTopMax = event.target.scrollTopMax;

            const currentWidth = (scrollTop / scrollTopMax) * 100;
            this.setState({progressBarWidth: `${currentWidth}%`});
        }

        render() {
            return (
                <div className="progress-wrapper" onScroll={this.handleScrollBarWidth}>
                    <div className="progress-bar" style={{width: this.state.progressBarWidth}}></div>
                    <Component {...this.props} />
                </div>
            );
        }
    }   
}

export default withProgressReadingBar;