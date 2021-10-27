import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import SubContents from "./components/SubContents";
import Advertisement from "./components/Advertisement";
const appStyle = {
  backgroundColor: "#dddddd",
  justifyContent: "space-between",
};
const subContentContainerStyle = {
  display: "flex",
  width: "103%",
};
function App() {
  return (
    <div style={appStyle}>
              
      <Header />
              
      <div
        style={{
          display: "flex",
          margin: "0 30px",
          justifyContent: "space-between",
        }}
      >
        <Navigation />

        <Main>
          <div style={subContentContainerStyle}>
            <SubContents />
                        
            <SubContents />
                        
            <SubContents />
                        
          </div>
          <Advertisement />
                            
        </Main>
      </div>
          
    </div>
  );
}

export default App;
