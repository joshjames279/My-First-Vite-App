import React from "react";
const mykey = `${import.meta.env.VITE_WEATHER_API_KEY}`;
import { Component } from "react";

interface Props {}
interface State {
  city: string;
  country: string;
  temperature: number;
}

export default class Weather3 extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { city: "", country: "", temperature: 0 };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=london&appid=${mykey}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleInput(event: any) {
    let newCity: any | null = document.getElementById("cityName");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&appid=${mykey}&units=metric`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleInput}>
          <input id="cityName" type="text" placeholder="Type new city here" />
          <button type="submit">Enter</button>
        </form>
        <div>
          <p>{this.state.city}</p>
          <p>{this.state.country}</p>
          <p>🌡</p>
          <p>{this.state.temperature}</p>
        </div>
      </div>
    );
  }
}
