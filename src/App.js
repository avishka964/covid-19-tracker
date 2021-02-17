import React from "react"
import { Cards, CountryPicker, Chart } from "./components"
import classes from "./App.module.css"
import { fetchData } from "./API"
import header from "./images/covid-19.png"

class App extends React.Component {
  state = {
    data: {},
    country: "",
  }
  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={classes.Container}>
        <img className={classes.Image} src={header} alt="covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
