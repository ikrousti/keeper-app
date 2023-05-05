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
            {notes.map(noteItem =>
        <Note
        key={noteItem.id}
        title={noteItem.title}
        content={noteItem.content}
    />)}
            <div className="footer">
            <Footer />
            </div>
</div>
    )
}

export default App;