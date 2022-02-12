import { Component } from "react";
import Profile from "../Components/Profile";
import Form from "../Components/Form";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      male: false,
      city: "",
      country: "",
      submitted: false,
    };
  }
  render() {
    const { name, age, male, city, country, submitted } = this.state;
    // console.log(<Form/>,"hi")
    return (
      <div>
        {submitted ? (
          <Profile
            name={name}
            age={age}
            male={male}
            city={city}
            country={country}
            setParentState={(d) => this.setState(d)}
          />
        ) : (
          <Form
            setParentState={(d) => this.setState(d)}
            submitted={submitted}
            name={name}
            age={age}
            male={male}
            city={city}
            country={country}
          />
        )}
      </div>
    );
  }
}

export default Home;
