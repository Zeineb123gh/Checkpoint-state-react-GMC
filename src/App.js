import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullname: "zeineb",
      bio: "08 aout 1992",
      profission: "developpeur fullstack js",
      imgSrc: <img src="./img1.jpg" alt="igze" />,
    },
    show: "false",
    date: 0,
  };
  handeldata = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ date: this.state.date + 1 });
    }, 1000);
  }
  render() {
    return (
      <div
        style={{
          boxShadow: "5px 10px #888888",
          margin: "50px ",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <button onClick={this.handeldata}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show ? (
          <h1>
            {this.state.person.fullname}
            <br />
            {this.state.person.bio}
            <br />
            {this.state.person.profission}
            <br />
            {this.state.person.imgSrc}
          </h1>
        ) : null}
        <h1>{this.state.date}</h1>
      </div>
    );
  }
}

export default App;
