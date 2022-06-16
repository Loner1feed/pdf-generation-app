import { useState } from "react";
import "./App.css";
import { MarginInputBox } from "./components/MarginInputBox/MarginInputBox";
import { TinyMCE } from "./components/TinyMCE/TinyMCE";

const App = () => {
  // const {margins} = useSelector(store => store.editor)

  // const editorRef = useRef();
  const [data, setData] = useState("");

  return (
    <div className="App" style={{ maxWidth: "1300px", margin: "0px auto" }}>
      <TinyMCE data={data} setData={setData} />
      <MarginInputBox />
    </div>
  );
};

export default App;
