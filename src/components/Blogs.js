import React from "react";
import Navbar from "../views/Navbar";

import "../style/blogs.css";
import {blogItems} from "../data/blogs";

function Blogs() {
 
  return (
    <div className="blogs-screen">
      <div className="navbar-items">
        <Navbar />
      </div>

      <div className="row blogs-main">
        <div className="col-lg-3 blogs-sidebar">
          <div className="blog-items">
            <ul>
              {blogItems.map((key, a,i) => (
                <div key={a} className="list">
                  <li>
                    {blogItems[a].title}
                    <ul>
                      <li>{blogItems[a].subtitle[0].theme}</li>
                      <li>{blogItems[a].subtitle[1].theme}</li>
                      <li>{blogItems[a].subtitle[2].theme}</li>
                    </ul>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-lg-9 blogs-content"></div>
      </div>
    </div>
  );
}

export default Blogs;
