import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

// 1. Create a new React App
// 2. Creat a App.jsx component
// 3. Create a Header.jsx component that renders a <header> element
//  to show Keeper App name in an <h1>
// 4. Create a Footer.jsx component that render a <footer> element
// to show copyright message in a <p> with a dynamically updated year.
// 5. Create a Note.jsx component to show a <div> element with a
// <h1> for a title and a <p> for the content.
// 6. Make sure that the final website is style like the example shown here: https://w00gz.csb.app/



function KeeperApp() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  )
};

export default KeeperApp;
