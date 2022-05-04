
import './App.css';
import React, { useEffect, useState } from "react";
import ImgContainer from './components/ImgContainer';

const url = "https://thingproxy.freeboard.io/fetch/https://imsea.herokuapp.com/api/1?q=";

function App() {
  const [searchText, setSearchText] = useState("Kutaisi");
  const [imgLinks, setImgLinks] = useState([]);

  const search = () => {
    setSearchText(document.getElementById("searchText").value)
  };


  const darkMode = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let icon = document.getElementById("mode");
    icon.classList.toggle("moon");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + searchText);
        const json = await response.json();
        setImgLinks(json.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

  }, [searchText])

  return (
    <div className="App">
      <header>
        <input id="searchText" type="text" defaultValue={"Kutaisi"} name="search" />
        <button id="searchButton" onClick={search} type="submit"><i className="fa fa-search"></i></button>
        <button id="mode" onClick={darkMode}></button>
      </header>
      <ImgContainer searchText={searchText} imgLinks={imgLinks} />
    </div>
  );
}

export default App;
