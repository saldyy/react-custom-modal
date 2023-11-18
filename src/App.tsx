import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Toggle Modal
      </button>
      <p>Random content</p>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default App;
