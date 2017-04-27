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
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';


class Layout extends React.Component {
  constructor(){
    super();
    this.state={
      location:''
    }
  }
  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  componentDidMount(){
    this.setState({
      location:window.location.pathname
    });
  }

  render() {
    return (
      <div>
        <Header />{this.state.location!='' && console.log(this.state.location)}
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(Layout);
