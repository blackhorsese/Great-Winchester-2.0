import React from 'react';

class Ticker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  componentDidMount() {
    this.startTickerAnimation();
  }

  startTickerAnimation = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        text: prevState.text.substring(1) + prevState.text[0],
      }));
    }, this.props.speed || 100);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="ticker-container">
        <div className="ticker">
          {this.state.text}
        </div>
      </div>
    );
  }
}

export default Ticker;