export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label for="intial-investment">Initial Investment</label>
          <input
            id="intial-investment"
            type="number"
            required
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          ></input>
        </p>
        <p>
          <label for="annual-investment">Annual Investment</label>
          <input
            id="annual-investment"
            type="number"
            required
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label for="expected-return">Expected Return</label>
          <input
            id="expected-return"
            type="number"
            required
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            value={userInput.expectedReturn}
          ></input>
        </p>
        <p>
          <label for="duration">Duration</label>
          <input
            id="duration"
            type="number"
            required
            onChange={(event) => onChange("duration", event.target.value)}
            value={userInput.duration}
          ></input>
        </p>
      </div>
    </section>
  );
}
