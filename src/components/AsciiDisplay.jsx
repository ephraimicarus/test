import * as React from "react";

export class AsciiDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.size,
      price: this.props.price,
      date: this.props.date,
    };
  }

  priceFormat = () => {           //format price from cents to $ xx.xx
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

  dateFormat = () => {    //date display on product grid items manipulation
    let d = Date.now();
    let a = Date.parse(this.state.date);
    let daysSinceIssued = (d - a) / (1000 * 60 * 60 * 24); //days past since Ascii face published, in milliseconds


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
      <div className="grid-item">
        <div style={{ fontSize: this.state.size }} className="asciiFace">
          {this.props.face}
        </div>
        <div className="itemDescription">
          <ul>
            <br></br>

            <li>Size: {this.props.size}</li>
            <br></br>

            <li>ID: {this.props.id}</li>
            <br></br>

            <li>Published: {this.state.date}</li>
          </ul>
        </div>
      </div>
    );
  }
}
