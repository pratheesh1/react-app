import React, { Component } from "react";
import SwitchFormPage from "./form/Switch-Form-Page";

const api_base_url = "http://localhost:3500";
const countries_api_endpoint = api_base_url + "/countries";

export default class Form extends Component {
  state = {
    countries: [],
    formPage: 1,
  };

  async componentDidMount() {
    //get countries after component mount
    var response = await fetch(countries_api_endpoint).catch((err) =>
      console.error(err)
    );
    var countries = await response.json().catch((err) => console.error(err));
    this.setState({ countries });
  }

  render() {
    return <SwitchFormPage countries={this.state.countries} />;
  }
}
