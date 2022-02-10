import { Component } from "react";
import Profile from "../Components/Profile";
import Form from "../Components/Form";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: "",
      city: "",
      country: "",
      submitted: false,
    };
  }
  render() {
    const { name, age, gender, city, country, submitted } = this.state;
    // console.log(<Form/>,"hi")
    return (
      <div>
        {submitted ? (
          <Profile
            name={name}
            age={age}
            gender={gender}
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
            gender={gender}
            city={city}
            country={country}
          />
        )}
      </div>
    );
  }
}

export default Home;
