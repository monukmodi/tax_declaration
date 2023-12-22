import React from "react"

const Header = () => {
  return (
    <div className="head-top">
      <div>
        <i class="fa-solid fa-question"></i>
      </div>
      <div>
        <i class="fa-solid fa-bell"></i>
      </div>
      <div className="head-user">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <p>Abhishek Mohanty</p>
        <div>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>
  )
}

export default Header
