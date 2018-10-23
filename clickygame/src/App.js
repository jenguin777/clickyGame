import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends
  };

  changeClickState = (id) => {
    console.log('click triggered: ', id);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
        <Wrapper>
        <Navbar />
        {/* <Header /> */}
        {/* This is the react version of a for loop, grab each friend from the friends array add the specified attributes, then return the friend in a FriendCard */}
          {this.state.friends.map(friend => (
            <FriendCard
              key={friend.id}
              id={friend.id}
              markCard={this.markCard}
              image={friend.image}
              changeClickState={this.changeClickState}
            />
          ))}
        </Wrapper>
    );
  }
}

export default App;
