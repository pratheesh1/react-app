import React, { Component } from "react";
import SwitchFormPage from "./form/Switch-Form-Page";

// TODO: to move api_base_url to env variable
const api_base_url = "http://localhost:3500";
const countries_api_endpoint = api_base_url + "/countries";

export default class Form extends Component {
  state = {
    countries: [],
    formPage: 1,
  };

  async componentDidMount() {
    //get countries after component mount
    await fetch(countries_api_endpoint)
      .then(async (resp) => {
        var countries = await resp.json().catch((err) => console.error(err));
        this.setState({ countries });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return <SwitchFormPage countries={this.state.countries} />;
  }
}
