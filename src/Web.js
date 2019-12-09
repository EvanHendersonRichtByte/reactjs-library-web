import React,{Component} from 'react';
import Utama from './BrowserRouter/Primary';
import {Link} from 'react-router-dom';

class Web extends Component{
  render{
    return(
      <hr />
      <Link to="/">Home</Link> |
      <Link to="/Alert">Alert</Link> |
      <Link to="/Media">Media</Link> |
      <p><Utama /></p>
      <hr />

    );
  }
}
 export default Web;
