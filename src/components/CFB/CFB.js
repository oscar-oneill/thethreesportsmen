import React, { Component } from "react";
import "../CFB/CFB.css";
import Logo from "../Media/Images/ncaa.png";

class CFB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://oscar-sports-server.herokuapp.com/ncaaf")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.events,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div className="cfb__wrap">Loading Data...</div>;
    } else {
      return (
        <div className="cfb__container">
          {items.map((item, i) => (
            <div className="cfb__wrap" key={item.id}>
              <div className="cfbweek">
                <img id="ncaa" src={Logo} alt="ncaa logo" />
                NCAA Division I-FBS
              </div>

              <div className="cfb__road">
                <div className="cfbroad__logo">
                  <img
                    src={items[i].competitions[0].competitors[1].team.logo}
                    alt="road"
                  />
                </div>
                <div className="cfbroad__name">
                  {items[i].competitions[0].competitors[1].curatedRank.current <= 25 ? items[i].competitions[0].competitors[1].curatedRank.current : ""} {" "}
                  {items[i].competitions[0].competitors[1].team.displayName}
                  <br/>
                  ({items[i].competitions[0].competitors[1].records[0].summary})
                </div>
                <div className="cfbroad__score">
                  {items[i].status.type.state === "pre" ? "" : items[i].competitions[0].competitors[1].score}
                </div>

                <div className="cfbgametime">
                  {items[i].competitions[0].status.type.shortDetail}
                </div>
              </div>

              <div className="cfb__home">
                <div className="cfbhome__logo">
                  <img
                    src={items[i].competitions[0].competitors[0].team.logo}
                    alt="home"
                  />
                </div>
                <div className="cfbhome__name">
                  {items[i].competitions[0].competitors[0].curatedRank.current <= 25 ? items[i].competitions[0].competitors[0].curatedRank.current : ""} {" "}
                  {items[i].competitions[0].competitors[0].team.displayName}
                  <br/>
                  ({items[i].competitions[0].competitors[0].records[0].summary})
                </div>
                <div className="cfbhome__score">
                  {items[i].status.type.state === "pre" ? "" : items[i].competitions[0].competitors[0].score}
                </div>

                <div className="cfbperiod">
                  {items[i].competitions[0].broadcasts[0] ? items[i].competitions[0].broadcasts[0].names[0] : ""}
                </div>
              </div>

              <div className="cfbvenue__data">
                {items[i].competitions[0].venue.fullName} -{" "}
                {items[i].competitions[0].venue.address.city},{" "}
                {items[i].competitions[0].venue.address.state}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default CFB;
