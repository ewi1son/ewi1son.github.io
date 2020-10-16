import React from "react";

// export default const Header = () => {}
function Header(props) {
  //if = 1 -> active, if not 'nothing'
  // let classname = props.currentPage === 1 ? 'active' : '';
  // console.log(window.localStorage.getItem('name'))
  return (
    <>
    <ul className="nav nav-pills badge-dark mb-4">
      {
        props.pages.map((item, index) => {
        return (
          <li className="nav-item" key={index}>
            <a
                href={"#"}
                onClick={() => props.setPage(index)}
                className={
                "nav-link " + (props.currentPage === index ? "active" : "")}
              >
                {item.readableName}
              </a>
            </li>
          )
        })
      }
    
    </ul>
    {props.name}
    </>
  );
}

export default Header;
