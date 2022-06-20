import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { ButtonBox } from "./components/ButtonBox/ButtonBox";
import { MarginInputBox } from "./components/MarginInputBox/MarginInputBox";
import { TinyMCE } from "./components/TinyMCE/TinyMCE";

const App = () => {
  // const {margins} = useSelector(store => store.editor)

  // const editorRef = useRef();
  const [data, setData] = useState("");

  useEffect(() => {
    let ls = window.localStorage;
    // ls.setItem("item", dataToSave);
    const newItem = JSON.parse(ls.getItem("item"));
    setData(newItem);
  }, []);

  const saveToLocal = () => {
    const dataToSave = JSON.stringify(data);
    let ls = window.localStorage;
    ls.setItem("item", dataToSave);
  };

  return (
    <div className="App" style={{ maxWidth: "1000px", margin: "0px auto" }}>
      <TinyMCE data={data} setData={setData} />
      <MarginInputBox />
      <ButtonBox generateFunction={saveToLocal} />
    </div>
  );
};

export default App;
