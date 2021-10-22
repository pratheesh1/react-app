import React, { Component } from "react";
import SwitchFormPage from "./form/Switch-Form-Page";
import { countries_api_endpoint as countriesApiUrl } from "../api";

export default class Form extends Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    //get countries after component mount
    await fetch(countriesApiUrl)
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
