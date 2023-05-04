import React from "react";

function Footer(){
const day= new Date();
const currentYear =day.getFullYear()
return(<p>Copyright {currentYear}</p>)
}
export default Footer