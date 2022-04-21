import { useState } from "react";
import { AppContainer } from "./assets/style/styles";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AppContainer>
      <div>
        <h1>Learn to code by watching others</h1>

        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div className="free-trial-info">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </div>

        <form>
          <input
            data-test="input-first-name"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            data-test="input-last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <input
            data-test="input-email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            data-test="input-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="submit"
            data-test="button-submit"
            onClick={(event) => {
              event.preventDefault();
              setFirstName("");
            }}
          >
            Claim your free trial
          </button>
          <small>
            By clicking the button, you are agreeing to our{" "}
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Terms and Services
            </a>
          </small>
        </form>
      </div>
    </AppContainer>
  );
}

export default App;
