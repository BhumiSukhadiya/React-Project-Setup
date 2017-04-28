/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Newroute.css';
import GoogleLogin from 'react-google-login';
import {auth as config} from '../../config';

class Newroute extends React.Component {
  responseGoogle=(response)=>{
    console.log(response);
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>React.js News</h1>
          {console.log(this.props)}
          {this.props.username !== undefined && <div>{this.props.username}</div>}
          <div>Hello,You are on sub route admin/users</div>
          <GoogleLogin
            clientId={config.google.id}
            buttonText="Google Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Newroute);
