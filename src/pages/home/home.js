import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import  "./home.css";
import MySearch from "../../components/search/searchbar";
function Home() {
  return (
      <>
    <div className="home">
      <div className="home__header">
        {/**header left */}
        <div className="headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        {/*header right */}
        <div className="home__headerRight">
          <AppsIcon/>
          <Avatar />
        </div>
      </div>
       {/**body */}
      <div className="home__body">
        
        <h2><span className="books">Books</span> App</h2>
      </div>
    </div>
            <div> 
                    {/**search component */}
                  <MySearch/>
        </div>
    </>
  );
}

export default Home;