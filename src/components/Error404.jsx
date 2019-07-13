import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h2 style={{color: 'white', paddingTop: '100px', fontFamily: 'sans-serif', fontWeight: 'lighter'}}>The page {props.location.pathname} does not exist!</h2>
      <h3 style={{color: 'white', fontFamily: 'sans-serif', fontWeight: 'lighter'}}>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}
Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;