import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App(){
    return(
        <div>
        <div className="header">
            <Header />
            </div>
            <div className="note">
            <Note />
            </div>
            <div className="footer">
            <Footer />
            </div>
</div>
    )
}

export default App;