import * as React from "react";
import { AsciiDisplay } from "./AsciiDisplay.jsx";
import "../css/app.css";
import { LoadingDiv } from "./LoadingDiv.jsx";

export class MyBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [], //API fetch data buffer
      page: 1, //API fetch page modifier
      loading: true,
    };
  }

  loadOnScroll = () => { //infinite scroll feature
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      this.fetchData(this.state.page);
    }
  };

  fetchData = (pageNum) => {
    fetch(
      "http://localhost:5000/products?_page=" + this.state.page + "&_limit=20"
    )
      .then((results) => results.json())
      .then((results) =>
        this.setState({
          items: [...this.state.items, ...results],
          page: this.state.page + 1,
          loading: false,
        })
      );
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.loadOnScroll);
    this.fetchData(this.state.page);
  };

  render() {
    if (this.state.loading === true) {
      return <LoadingDiv />;
    } else
      return (
        <div className="grid-container">
          {this.state.items.map((item, index) => (
            <AsciiDisplay      //--------------------main data display div
              key={index}
              face={item.face}
              size={item.size}
              price={item.price}
              id={item.id}
              date={item.date}
            />
          ))}
        </div>
      );
  }
}
