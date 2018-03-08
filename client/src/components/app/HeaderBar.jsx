/*HeaderBar will only contain banner image
  it is a stateless presentational component
*/

import React from 'react';
import {Link} from 'react-router-dom';

//Re-write HeaderBar, it will no longer contain navigation elements
  const HeaderBar = (props) => (
    <div className="wrapper full-height">
      <header className="header cf">
        <div className="float-left">
          <Link to="/" className="menu-title">
            <span>Forum</span>
          </Link>
        </div>
      </header>
    </div>
  );

  export default HeaderBar;
