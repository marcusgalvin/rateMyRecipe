import React, { Component } from "react";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";
import Test from "./Test";
import Date from "./Date";

class Review extends Component {
  constructor() {
    super();

    this.state = {
      name: "Test",
      rating: 2
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({
      name: name,
      rating: nextValue
    });
    // console.log('rating:', nextValue)
    // console.log('name:', name)
    // console.log(this.state)

    const datas = {
      starCount: nextValue,
      name: name
    };
    console.log(datas);

    axios
      .post("/api", datas)

      .then(res => console.log(datas));
  }

  registerUser = () => {
    // console.log(this.state);

    const data = {
      username: this.state.userName,
      message: this.state.message,
      rate: this.state.rating,
      date: this.state.date,
      name: this.state.name,
      starCount: this.state.rating
    };

    axios.post("/api", data).then(res => console.log(res.data));

    console.log(this.state);
  };

  // refreshPage = () => {
  //   window.location.reload(false);
  // };

  render() {
    const { rating } = this.state;

    return (
      <div
        id="sellDiv"
        style={{ margin: "100x", textAlign: "left" }}
        className="revDiv"
      >
        <h3>Leave us a review</h3>
        <br />
        <input
          className="feild"
          onChange={e => this.setState({ userName: e.target.value })}
          placeholder="Customer's Name..."
          type="text"
        />
        <div className="ramenPic">
          <img src="https://images-na.ssl-images-amazon.com/images/I/71tACQa1n1L._SX425_.jpg" />
        </div>
        <br />
        <input
          className="feild"
          onChange={e => this.setState({ date: e.target.value })}
          placeholder="Menu Item..."
          type="text"
        />

        <br />
        <StarRatingComponent
          className="starSize"
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <br />
        <input
          className="feildRev"
          onChange={e => this.setState({ message: e.target.value })}
          placeholder="Write a Review..."
          type="text"
        />
        <br />

        <br />

        <button className="submitButton" onClick={this.registerUser}>
          {/* <button className="submitButton" onClick={this.registerUser}> */}
          Submit
        </button>

        {/* <button onClick={ this.getStars }>Submit1</button> */}

        <button className="submitButton" onClick={this.sortByRate}>
          TEST
        </button>
      </div>
    );
  }
}

export default Review;
