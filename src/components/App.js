import React, { Component } from "react";
import Header from "./Header";
import Blogpost from "./Blogpost";

// import Image from "./Image";

//this can be named anything
class App extends Component {
  constructor() {
    super();
    this.pages = [
      { readableName: "Evan Wilson", url: "name" },
      { readableName: "Home", url: "home" },
      { readableName: "Blog", url: "blog" },
      { readableName: "Projects", url: "projects" },
      // { readableName: "Links", url: "links" },
    ];
    this.state = {
      currentPage: 0,
      name: "",
    };
    this.setPage = this.setPage.bind(this);
  }
  //takes any number give (newPageNum) and uses it to update the new page
  setPage(newPageNum) {
    console.log(newPageNum);
    this.setState({ currentPage: newPageNum });
  }
  // COMPONENT DID functions limited to classes
  //react function
  componentDidMount() {
    // console.log("in component did mount method");

    let currentPage = window.localStorage.getItem("currentPage");

    // console.log(name);
    // if name exists do this
    if (currentPage) {
      //do someething
      console.log("found the currentPage, ", currentPage);
      // console.log(typeof currentPage)
      this.setState({ currentPage: JSON.parse(currentPage) });
      //if name doesnt exists do this
    } else {
      console.log("no currentPage creating new currentPage instance");
      window.localStorage.setItem("currentPage", 0);
    }
  }

  componentDidUpdate() {
    // console.log("in component did update method", this.state.currentPage);
    window.localStorage.setItem("currentPage", JSON.stringify(this.state.currentPage));
  }

  render() {
    return (
      <div className="App">
        <Header
          pages={this.pages}
          currentPage={this.state.currentPage}
          setPage={this.setPage}
          name={this.state.name}
        />
        <div className="container">
        <Blogpost />
        </div>

        {/* <Image /> */}
      </div>
    );
  }
}

export default App;
