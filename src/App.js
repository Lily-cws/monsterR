import { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import Searchbox from "./components/search-box/search-box.component";

class App extends Component{
  // initialize state
  constructor() {
    super();

    this.state = {
      // name: {fname: "Lily", lname: "chong"},
      // name2: {fname: "Harry", lname: "Prince"},
      // company: "XTM",
      // monster1: {
      //   name: "Linda"
      // },
      // monster2: {
      //   name: "Frank"
      // },
      // monster3: {
      //   name: "Jacky"
      // },
      // monsters: [{name: "Lindas", id: 1}, {name: "Franks", id: 2}, {name:"Jackys", id: 3}],
      monstersArray: [],
      searchFiled: ""

    };
    // console.log("constructor()");
  }

  // componentDidMount is invoked immediately after component is mounted
  // Initialization that requires DOM nodes should go here
  // if you need to load data from a remote endpoint, place here
  componentDidMount() {
    console.log("componentDidMount()")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users)=> this.setState(() => {
        return {monstersArray: users} },
        () => console.log(this.state)
      ));
  }

  // this function/method only going to create once during initialization
  // unlike anonymous function, will be invoked everytime it rerender if we write the function inside the render()
  onsearchChange = (event) => {
    // console.log(event.target.value);
    const searchString = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {searchFiled: searchString} ;
    })
  };

  render() {
    console.log("render()")
    // optimize code here
    const {monstersArray, searchFiled} =  this.state ;
    const {onsearchChange} =  this;

    const filteredMonsters = monstersArray.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchFiled);
    });
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>Hi {this.state.name.fname} {this.state.name.lname}, i work at {this.state.company}</p>
      //     <p>Hi {this.state.name2.fname} {this.state.name2.lname}, name2</p>
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //
      //     <button onClick={() => {
      //       // function
      //       this.setState({name: {fname:"Andrei", lname: "Loo"}});
      //       console.log(this.state)
      //     }}>Change Name</button>
      //
      //     <button onClick={() => {
      //       // setState and secondary callback
      //       this.setState(
      //         () => {
      //           return {
      //             name2: {fname: "David", lname: "Wong"},
      //           }
      //         },
      //         () => {
      //           console.log("callback function run only after state is updated ",this.state)
      //         });
      //     }}
      //
      //     >Change Name Secondary Callback function</button>
      //   </header>
      // </div>
      <div className="App">
        {/*<h1>{this.state.monster1.name}</h1>*/}
        {/*<h1>{this.state.monster2.name}</h1>*/}
        {/*<h1>{this.state.monster3.name}</h1>*/}

        {/*{*/}
        {/*  this.state.monsters.map((monsters) => {*/}
        {/*    return <p key={monsters.id}>{monsters.name}</p>*/}
        {/*  })*/}
        {/*}*/}

        {/*<input*/}
        {/*  className="search-box"*/}
        {/*  type="search"*/}
        {/*  placeholder="search monsters"*/}
        {/*  onChange={onsearchChange}*/}
        {/*/>*/}

        {/*{*/}
        {/*  filteredMonsters.map((monsters) => {*/}
        {/*    return (*/}
        {/*      <div key={monsters.id}>*/}
        {/*        <h1 >{monsters.name}</h1>*/}
        {/*      </div>*/}
        {/*      )*/}
        {/*  })*/}
        {/*}*/}

        <h1 className="app-title">Monsters Rolodex</h1>
        <Searchbox onChangeHandler={onsearchChange} placeholder="Search Monsters" className="search-box" />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }

}

export default App;
