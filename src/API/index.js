import axios from "axios"

const API_URL = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
  let changeableUrl = API_URL

  if (country) {
    changeableUrl = `${API_URL}/countries/${country}`
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl)

    const dataModel = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    }

    return dataModel
  } catch (error) {
    console.log(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/daily`)

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))

    return modifiedData
  } catch (error) {}
}

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${API_URL}/countries`)

    return countries.map((country) => country.name)
  } catch (error) {
    console.log(error)
  }
}
