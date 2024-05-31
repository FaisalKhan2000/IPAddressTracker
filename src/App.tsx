import Display from "./components/Display";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="main-container">
      <header className="header-container">
        <p className="logo">IP Address Tracker</p>
        <Form />
        <Display />
      </header>
      <main></main>
    </div>
  );
}
