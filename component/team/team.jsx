import React from "react";
import Link from "next/link";

//import component
import Header from "../Header";
import Project from "../Project";
import Teamcomponent from "../Teamcomponent";
import Line from "../Line";
import Footer from "../Footer";
import Homebg from "../../component/Homebg";

export default function Team() {

  // Team title and category start
  const Title = 'Team';
  const Categories = ['Team'];
  const homeLink = 'Home';
 // Team title and category end
 
  return (
    <React.Fragment>

      <Header/>

      {/* Services home start */}
      <Homebg title={Title} categories={Categories} homeLink={homeLink} />
      {/* Services home end */}
      
       <Line />

      {/* team start */}
      <Teamcomponent />
      {/* team end */}

       <Line />

      {/* team start */}
       <Project/>
      {/* team end */}
      
       <Footer/>
    </React.Fragment>
    
  );
}
