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
        <button onClick={submit}>Request Access</button>
      </div>
    </div>
  );
}
