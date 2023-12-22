// App.js
import React, { useState, useEffect } from "react"
import Chapter from "./components/Chapter"
import Accordion from "./components/Accordion/Accordion"
import "./App.css"
import Header from "./components/Header"

function App() {
  const [apiData, setApiData] = useState(null)
  const [editedAmounts, setEditedAmounts] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/6572dc690574da7622d1fd42"
        )

        if (!response.ok) {
          throw new Error("Error fetching data from the API")
        }

        const result = await response.json()
        setApiData(result.record)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const organizeDataBySection = () => {
    return Object.keys(apiData).reduce((accordions, key) => {
      const item = apiData[key]
      if (!accordions[item.section]) {
        accordions[item.section] = []
      }
      accordions[item.section].push({
        key: item.key,
        label: item.label,
        amount: item.amount,
      })
      return accordions
    }, {})
  }

  const handleAmountChange = (key, value) => {
    setEditedAmounts((prev) => {
      const newEditedAmounts = { ...prev }
      newEditedAmounts[key] = value === "" ? undefined : value

      return newEditedAmounts
    })
  }

  const handleSave = () => {
    // Update the amounts in the apiData with the edited amounts
    const updatedApiData = Object.keys(apiData).map((key) => ({
      ...apiData[key],
      amount:
        editedAmounts[key] !== undefined
          ? editedAmounts[key]
          : apiData[key].amount,
    }))

    // Log the updated response object
    console.log("Updated response object:", updatedApiData)

    // You can use the updatedApiData for further actions or API calls

    // Optionally, you can set the updated data back to the state
    setApiData(updatedApiData)

    // Clear the edited amounts
    setEditedAmounts({})
  }

  if (!apiData) {
    return <p>Loading data...</p>
  }

  const accordionsBySection = organizeDataBySection()

  return (
    <div className="chapter-container">
      <Header />
      <Chapter />
      {Object.keys(accordionsBySection).map((section, index) => (
        <Accordion
          key={index}
          title={section}
          data={apiData}
          onAmountChange={handleAmountChange}
        />
      ))}
      <button className="btn-save" onClick={handleSave}>
        Save
      </button>
    </div>
  )
}

export default App
