import { useState } from "react";
import { Button, Card, TextField } from "./components";

export default function App() {
  const [name, setName] = useState("");
  return <main className="showcase">
    <header className="showcase__header">
      <span className="eyebrow">OPEN SOURCE · REACT · TYPESCRIPT</span>
      <h1>React UI Toolkit</h1>
      <p>A growing collection of simple, accessible building blocks for React apps.</p>
    </header>
    <Card title="Try the components">
      <TextField label="Your name" placeholder="Enter your name" value={name} onChange={event => setName(event.target.value)} hint="This demo uses the reusable TextField component." />
      <div className="button-row">
        <Button onClick={() => setName("")} variant="outline">Clear</Button>
        <Button onClick={() => window.alert(name ? `Hello, ${name}!` : "Please enter your name.")}>Preview greeting</Button>
      </div>
    </Card>
    <Card title="Button variants"><div className="button-row">
      <Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button>
    </div></Card>
    <footer>Built in public · Contributions and feedback are welcome.</footer>
  </main>;
}