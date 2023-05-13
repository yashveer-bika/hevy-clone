import {NavLink} from "react-router-dom";
import "./NavBar.css"
import { nanoid } from 'nanoid';

export type NavButtonPair = { pageName: string; displayName: string; };
export type Pages = { pages : NavButtonPair[] };

function Button( {pageName, displayName} : NavButtonPair) {
  return (
    <div className="navButton">
        <NavLink to={pageName} >{displayName}</NavLink>
    </div>
  );
}

// TODO: if I have issues, it may be the `any` type
function NavBar( {pages} : any) {
  const buttons : any = [];
  pages.forEach( (pg : any) => {
    buttons.push(
      <Button key={nanoid()} pageName={pg.pageName} displayName={pg.displayName} />
    );
  });

  return (
    <nav className="navBar">
       
          {buttons}
        
    </nav>
  );
}

export default NavBar;
