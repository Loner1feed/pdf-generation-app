import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { editorAPI } from "./api/editorAPI";
import { defaultData } from "./api/instance";
import "./App.css";
import { ButtonBox } from "./components/ButtonBox/ButtonBox";
import { MarginInputBox } from "./components/MarginInputBox/MarginInputBox";
import { Select } from "./components/Select/Select";
import { TinyMCE } from "./components/TinyMCE/TinyMCE";

const App = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const { margins } = useSelector((state) => state.editor);

  // get template to local storage
  useEffect(() => {
    let ls = window.localStorage;
    const newItem = JSON.parse(ls.getItem("item"));
    setData(newItem);
  }, []);

  // save template to local storage
  const saveToLocal = () => {
    const dataToSave = JSON.stringify(data);
    let ls = window.localStorage;
    ls.setItem("item", dataToSave);
  };

  //make an api call to generate pdf
  const sendData = async () => {
    const dataObj = {
      margins: margins,
      dataHtml: data,
    };
    setLoading(true);
    const res = await editorAPI.sendData(dataObj);
    setLoading(false);
    saveToLocal();
    const newUrl = defaultData.host + "/" + res;

    const link = document.createElement("a");
    link.href = newUrl;
    link.setAttribute("download", true);
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div className="App" style={{ maxWidth: "1000px", margin: "0px auto" }}>
      <TinyMCE data={data} setData={setData} />
      <Select />
      <MarginInputBox />
      <ButtonBox generateFunction={sendData} loading={loading} />
    </div>
  );
};

export default App;
