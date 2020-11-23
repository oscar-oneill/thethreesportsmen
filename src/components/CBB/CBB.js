import React, { Component } from "react";
import "../CBB/CBB.css";
import Logo from "../Media/Images/ncaa.png";

class CBB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://oscar-sports-server.herokuapp.com/ncaab")
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
      return <div className="cbb__wrap">Loading Data...</div>;
    } else {
      return (
        <div className="cbb__container">
          {items.map((item, i) => (
            <div className="cbb__wrap" key={item.id}>
              <div className="cbbweek">
                <img id="ncaa" src={Logo} alt="ncaa logo" />
                NCAA Division I Men's Basketball
              </div>

              <div className="cbb__road">
                <div className="cbbroad__logo">
                  <img
                    src={items[i].competitions[0].competitors[1].team.logo}
                    alt="road"
                  />
                </div>
                <div className="cbbroad__name">
                  {items[i].competitions[0].competitors[1].curatedRank.current <= 25 ? items[i].competitions[0].competitors[1].curatedRank.current : ""} {" "}
                  {items[i].competitions[0].competitors[1].team.displayName}
                  <br/>
                  {/* ({items[i].competitions[0].competitors[1].records[0].summary}) */}
                </div>
                <div className="cbbroad__score">
                  {items[i].status.type.state === "pre" ? "" : items[i].competitions[0].competitors[1].score}
                </div>

                <div className="cbbgametime">
                  {items[i].competitions[0].status.type.shortDetail}
                </div>
              </div>

              <div className="cbb__home">
                <div className="cbbhome__logo">
                  <img
                    src={items[i].competitions[0].competitors[0].team.logo}
                    alt="home"
                  />
                </div>
                <div className="cbbhome__name">
                  {items[i].competitions[0].competitors[0].curatedRank.current <= 25 ? items[i].competitions[0].competitors[0].curatedRank.current : ""} {" "}
                  {items[i].competitions[0].competitors[0].team.displayName}
                  <br/>
                  {/* ({items[i].competitions[0].competitors[0].records[0].summary}) */}
                </div>
                <div className="cbbhome__score">
                  {items[i].status.type.state === "pre" ? "" : items[i].competitions[0].competitors[0].score}
                </div>

                <div className="cbbperiod">
                  {items[i].competitions[0].broadcasts[0] ? items[i].competitions[0].broadcasts[0].names[0] : ""}
                </div>
              </div>

              <div className="cbbvenue__data">
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

export default CBB;
