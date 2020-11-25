import * as React from "react";
import AdGenerator from "./AdGenerator.jsx";
import MyHeader from "./MyHeader.jsx";
import { AsciiDisplay } from "./AsciiDisplay.jsx";
import "../css/app.css";
import { LoadingDiv } from "./LoadingDiv.jsx";

export class MyBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      loading: true,
    };
  }

  loadOnScroll = () => {
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
            <AsciiDisplay
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
