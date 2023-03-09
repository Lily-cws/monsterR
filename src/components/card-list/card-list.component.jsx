import { Component } from "react";
import "./card-list.style.css";
import "./card.style.css";

class CardList extends Component {

  render() {
    // console.log(this.props);
    // console.log("render from card list");

    const { monsters } = this.props;
    return (
      <div className="card-list">
        {/*<h1>CardList</h1>*/}
        {/*{*/}
        {/*  monsters.map((monsters) => (*/}
        {/*    // <h1 key={monsters.id}>{monsters.name}</h1>*/}
        {/*    <div className="card-container" key={monsters.id}>*/}
        {/*      <img*/}
        {/*        alt={`monsters ${monsters.name}`}*/}
        {/*        src={`https://robohash.org/${monsters.id}?set=set2&size=180x180`}*/}
        {/*      />*/}
        {/*      <h2>{monsters.name}</h2>*/}
        {/*      <p>{monsters.email}</p>*/}
        {/*    </div>*/}
        {/*  ))*/}
        {/*}*/}

        {
          // Destructuring
          monsters.map((monsters) => {
            const { id, name, email } = monsters;
            return (
              <div className="card-container" key={id}>
                <img
                  alt={`monsters ${name}`}
                  src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

}

export default CardList;
