import React, { Component } from "react";
import "../Baseball/Baseball.css";
import Logo from '../Media/Images/mlb.png';

class Football extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://oscar-sports-server.herokuapp.com/mlb")
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
      return <div className="baseball__wrap">Loading Data...</div>;
    } 
    
    else {

      return (
        <div className="mlb__container">
          {items.map((item, i) => (
            <div className="baseball__wrap" key={item.id}>
              <div className="status">
                <img id="mlb" src={Logo} alt="mlb logo" />
                {items[i].competitions[0].notes[0].headline}
              </div>
              <div className="mlb__road">
                <div className="road__logo">
                  <img
                    src={items[i].competitions[0].competitors[1].team.logo}
                    alt="road"
                  />
                </div>
                <div className="road__name">
                  {items[i].competitions[0].competitors[1].team.displayName} 
                  <br/>
                  ({items[i].competitions[0].competitors[1].records[0].summary})
                </div>
                <div className="road__score">
                  {items[i].status.type.state === "pre" ? "" : items[i].competitions[0].competitors[1].score}
                </div>

                <div className="gametime">
                  {items[i].competitions[0].status.type.shortDetail}
                </div>
              </div>

              <div className="mlb__home">
                <div className="home__logo">
                  <img
                    src={items[i].competitions[0].competitors[0].team.logo}
                    alt="home"
                  />
                </div>
                <div className="home__name">
                  {items[i].competitions[0].competitors[0].team.displayName}
                  <br/>
                  ({items[i].competitions[0].competitors[0].records[0].summary})
                </div>
                <div className="home__score">
                  {items[i].status.type.state === "pre" ? "" : items[i].competitions[0].competitors[0].score}
                </div>

                <div className="broadcast">
                  {items[i].competitions[0].broadcasts[0] ? items[i].competitions[0].broadcasts[0].names[0] : ""}
                </div>
              </div>

              <div className="venue__data">
                {items[i].competitions[0].series.summary ? items[i].competitions[0].series.summary : items[i].competitions[0].venue.fullName + " - " + items[i].competitions[0].venue.address.city + ", " + items[i].competitions[0].venue.address.state}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Football;









