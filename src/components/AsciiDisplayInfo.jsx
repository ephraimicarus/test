import * as React from "react";

export class AsciiDisplayInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.size,
      price: this.props.price,
      date: this.props.date,
    };
  }

  priceFormat = () => {
    let apiP = this.state.price;
    let priceFormatted = "$ " + apiP / 100;

    if (apiP % 10 === 0) {
      priceFormatted = priceFormatted + "0";
      this.setState({
        price: priceFormatted,
      });
    } else {
      this.setState({
        price: priceFormatted,
      });
    }
  };

  dateFormat = () => {
    let d = Date.now();
    let a = Date.parse(this.state.date);
    let daysSinceIssued = (d - a) / (1000 * 60 * 60 * 24);

    if (daysSinceIssued > 0 && daysSinceIssued < 1) {
      this.setState({
        date: "Freshly baked ASCII face!",
      });
    } else if (daysSinceIssued === 1) {
    } else if (daysSinceIssued > 1 && daysSinceIssued < 2) {
      this.setState({
        date: "Yesterday",
      });
    } else if (daysSinceIssued >= 2 && daysSinceIssued < 7) {
      this.setState({
        date: Math.floor(daysSinceIssued) + " days ago",
      });
    } else {
      this.setState({
        date: this.state.date,
      });
    }
  };

  componentDidMount = () => {
    this.priceFormat();
    this.dateFormat();
  };
  render() {
    return (
        
        <div className="itemDescription">
          <div>Size: {this.props.size}</div>
          <div>Price: {this.state.price}</div>Item ID:
          <div>{this.props.id}</div>Date Issued:
          <div>{this.state.date}</div>
        </div>
    );
  }
}
