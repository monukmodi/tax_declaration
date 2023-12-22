import icon1 from "./assets/database1.png"
import icon2 from "./assets/database2.png"

function Chapter() {
  return (
    <>
      <div>
        <div className="chapter-info">
          <span className="chapter-title">Chapter VI-A</span>
          <span className="financial-year">
            Financial Year: <span className="year">2023-24</span>
          </span>
        </div>

        <div className="amount-not-declared">
          <h4>Amount Not Declared</h4>
          <p>You will miss out on a lot of tax benefits</p>
        </div>

        <div className="declaration">
          <h4>Declaration</h4>
          <p>
            Upload proof for the declarations that you have done for the FY
            2022-23
          </p>
        </div>
        <div className="declaration-details">
          <div className="icon-section">
            <div className="icon">
              <img src={icon1} alt="Icon Description 1" />
            </div>
            <div className="amount-info">
              <p>Declared Amount</p>
              <p className="amount">67,987 INR</p>
            </div>
          </div>
          <div className="icon-section">
            <div className="icon">
              <img src={icon2} alt="Icon Description 2" />
            </div>
            <div className="amount-info">
              <p>Remaining to Declare</p>
              <p className="amount">67,987 INR</p>
            </div>
          </div>
        </div>

        <div className="tax-regime">
          <p>
            Tax Regime: Old --- <span className="change-link">Change</span>
          </p>
          <p className="condition">
            Considering your salary structure, we feel that the Old Regime suits
            you the best. Although you can move to other tax regimes if you
            want.
          </p>
        </div>
        <br />
      </div>
    </>
  )
}

export default Chapter
