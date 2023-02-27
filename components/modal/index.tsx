import { closeModal, showFinancialOptions, submit } from "./handlers";
import style from "./index.module.css";

export default function Modal() {
  return (
    <div id="myModal" className={`${style.modal}`}>
      <div
        className={`flex flex-col relative rounded-xl ${style.modalContent}`}
      >
        <span
          onClick={closeModal}
          className={`absolute top-0 right-4 z-10 ${style.close}`}
        >
          &times;
        </span>
        <div></div>
        <div className="flex flex-col">
          <h3>Request Access</h3>
          <p>
            Join our growing waitlist of 6,599 people and our team will reach
            out to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col">
          <label>Email Address</label>
          <input placeholder="Enter your email" />
          <label>Current test solution</label>
          <input placeholder="Select your test solution" />
        </div>
        <div onClick={showFinancialOptions}>
          <h3>
            Get first runs for free: <span id="yes">Y</span>{" "}
            <span id="no">N</span>
          </h3>
        </div>
        <div id="financialDetails" className="hidden flex-col">
          <h3>Details securely verified with Adyen</h3>
          <span>we do not store financial data</span>
          <label>Card holders name</label>
          <input placeholder="Enter card details" />
          <label>Card Details</label>
          <input placeholder="Enter card details" />
          <label>CVV</label>
          <input placeholder="Enter card details" />
          <label>Expiry Date</label>
          <div className="flex">
            <input placeholder="Enter card details" />
            <input placeholder="Enter card details" />
          </div>
        </div>
        <button onClick={submit}>Request Access</button>
      </div>
    </div>
  );
}
