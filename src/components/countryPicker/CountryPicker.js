import React, { useState, useEffect } from "react"
import { fetchCountries } from "../../API"
import { FormControl, NativeSelect } from "@material-ui/core"
import classes from "./CountryPicker.module.css"

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchAllCountries = async () => {
      setCountries(await fetchCountries())
    }
    fetchAllCountries()
  }, [setCountries])

  return (
    <FormControl className={classes.FormControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}
export default CountryPicker
