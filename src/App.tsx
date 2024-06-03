import Display from "./components/Display";
import Form from "./components/Form";
import Map from "./components/Map";

export default function App() {
  return (
    <div className="main-container">
      <header className="header-container">
        <p className="logo">IP Address Tracker</p>
        <Form />
        <Display />
      </header>
      <main className="map">
        <Map />
      </main>
    </div>
  );
}
