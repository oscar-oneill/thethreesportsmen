import React, { Component } from 'react'
import '../Basketball/Basketball.css'

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
    console.log(this.state.items);

    if (!isLoaded) {
      return <div className="basketball__wrap">Loading data...</div>;
    } else {
      return (
        <div class="nba__container">
          {items.map((item, i) => (
            <div className="basketball__wrap" key={item.id}>
              <div className="playoff__series">
                {items[i].competitions[0].notes[0].headline}
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
                </div>
                <div className="road__score">
                  {items[i].competitions[0].competitors[1].score}
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
                </div>
                <div className="home__score">
                  {items[i].competitions[0].competitors[0].score}
                </div>

                <div className="period">
                  {items[i].competitions[0].broadcasts[0].names[0]}
                </div>
              </div>

              <div className="series__data">
                {items[i].competitions[0].series.summary}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Basketball;