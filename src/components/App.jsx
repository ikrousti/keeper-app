import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";


function App(){
    return(
        <div>
        <div className="header">
            <Header />
            </div>
            {notes.map(notes =>
        <Note
        key={notes.id}
        title={notes.title}
        content={notes.content}
    />)}
            <div className="footer">
            <Footer />
            </div>
</div>
    )
}

export default App;