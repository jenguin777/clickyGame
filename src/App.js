import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    losses: 0,
    action: "Click an image to begin!",
    picked: []
  };

  // The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.
  // Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.
  // Once the user's score is reset after an incorrect guess, the game should restart.

  changeClickState = (id) => {
    console.log('click triggered: ', id);
    if(this.state.picked.includes(id)){
      this.setState({action: "You guessed incorrectly!"});
      this.resetGame();
      this.shuffleCards();
      this.setState({ losses: this.state.losses + 1});
    } else {
      this.setState({action: "CORRECT!"});
      this.setState({picked: [...this.state.picked, id], score: this.state.score + 1});
      this.shuffleCards();
    }
    console.log("this.state.picked: ", this.state.picked);

  }

  // Fisher-Yates Shuffle https://bost.ocks.org/mike/shuffle/
  shuffleCards = () => {
    // Make a copy of friends array, this copy is what will be shuffled
    const shuffleFriends = this.state.friends.slice();
    let friendsIndex = this.state.friends.length;
    let randomIndex = 0;
    let tempFriend = {};
    // While there remain elements to shuffle…
    while (friendsIndex) {
      // Pick a remaining random element…
      randomIndex = Math.floor(Math.random() * friendsIndex--);
      // And swap it with the current element.
      tempFriend = shuffleFriends[friendsIndex];
      shuffleFriends[friendsIndex] = shuffleFriends[randomIndex];
      shuffleFriends[randomIndex] = tempFriend;
    }
    this.setState({
      // Now, we set the shuffled copy of friends to friends
      friends: shuffleFriends,
    });
    return friends;
  }

  resetGame = () => {
    const resetFriends = this.state.friends.map(resetFriend => {
      this.shuffleCards();
      resetFriend.clicked = false;
      return resetFriend;
    });
    this.setState({
      score: 0,
      friends: resetFriends
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
        <Wrapper>
        <Navbar 
        score={this.state.score}
        action={this.state.action}
        />
        <Header></Header>
        {/* This is the react version of a for loop, grab each friend from the friends array add the specified attributes, then return the friend in a FriendCard */}
          {this.state.friends.map(friend => (
            <FriendCard
              key={friend.id}
              id={friend.id}
              changeClickState={this.changeClickState}
              image={friend.image}
            />
          ))}
        </Wrapper>
    );
  }
}

export default App;
