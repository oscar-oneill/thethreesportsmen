import React, { Component } from 'react';
import '../components/Basketball.css';
import Logo from '../media/images/nba.png';

class Basketball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      week: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://oscar-sports-server.herokuapp.com/nba")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.events,
          week: json.week,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div className="basketball__wrap">Loading Data....</div>;
    } else {
      return (
        <div className="nba__container">
          {items.map((item, i) => (
            <div className="basketball__wrap" key={item.id}>
              <div className="playoff__series">
                <img id="nba" src={Logo} alt="nba logo" />
                  NBA
              </div>
              <div className="nba__road">
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

              <div className="nba__home">
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

                <div className="period">
                  {items[i].competitions[0].broadcasts[0] ? items[i].competitions[0].broadcasts[0].names[0] : ""}
                </div>
              </div>

              <div className="nba_venue__data">
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

export default Basketball;