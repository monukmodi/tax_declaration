import React, { useState, useRef, useEffect } from "react"
import "./Accordion.css"

function Accordion(props) {
  const [isActive, setIsActive] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState("0px")
  const [editedAmount, setEditedAmount] = useState({})

  useEffect(() => {}, [contentHeight])

  const toggleAccordion = () => {
    setIsActive((prevIsActive) => !prevIsActive)
    setContentHeight(isActive ? "0px" : `${contentRef.current.scrollHeight}px`)
  }

  const handleAmountChange = (key, value) => {
    setEditedAmount((prev) => ({ ...prev, [key]: value }))
    props.onAmountChange(key, value)
  }

  const handleEditClick = (key) => {
    if (editingItem === key) {
      setEditedAmount((prev) => ({ ...prev, [key]: undefined }))
      setEditingItem(null)
    } else {
      setEditingItem(key)
    }
  }

  return (
    <div className={`accordion__section ${isActive ? "active" : "disabled"}`}>
      <div
        className={`accordion ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title"> Section {props.title}</p>
        <span style={{ marginLeft: "20px" }}>
          {isActive ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
        className="accordion__content"
      >
        <div className="accordion__text">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "18px",
              borderBottom: "1px solid #aaa",
            }}
          >
            <div>
              <p>Item</p>
            </div>
            <div>
              <p>Amount</p>
            </div>
          </div>
          {Object.keys(props.data)
            .filter((key) => props.data[key].section === props.title)
            .map((key) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <div style={{ padding: "18px" }}>
                  <p>{props.data[key].label}</p>
                </div>
                <div className="edit-amount" style={{ padding: "18px" }}>
                  {editingItem === key ? (
                    <span>
                      <input
                        type="text"
                        value={
                          editedAmount[key] !== undefined
                            ? editedAmount[key]
                            : props.data[key].amount === undefined
                            ? ""
                            : props.data[key].amount
                        }
                        onChange={(e) =>
                          handleAmountChange(key, e.target.value)
                        }
                        style={{ width: "90px" }}
                      />
                    </span>
                  ) : (
                    <span>{props.data[key].amount}</span>
                  )}
                  <div style={{ marginLeft: "10px" }}>
                    <i
                      className={
                        editingItem === key
                          ? "fa-solid fa-xmark"
                          : "fa-solid fa-pencil"
                      }
                      onClick={() => handleEditClick(key)}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Accordion
