import { AppContainer } from "./assets/style/styles";

function App() {
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
          <input placeholder="First Name" />
          <input placeholder="Last Name" />

          <input placeholder="Email Address" />
          <input placeholder="Password" />

          <button>Claim your free trial</button>
          <small>
            By clicking the button, you are agreeing to our{" "}
            <a href="https://google.com" target="_blank">
              Terms and Services
            </a>
          </small>
        </form>
      </div>
    </AppContainer>
  );
}

export default App;
