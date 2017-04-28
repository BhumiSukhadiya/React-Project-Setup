/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import NewRoute from '../newroute/Newroute';

const title = 'Admin Page';
const isAdmin = true;

export default {

  path: '/admin',
  children:[{
    path: '/',
    async action() {
      if (!isAdmin) {
        return { redirect: '/login' };
      }

      const Admin = await require.ensure([], require => require('./Admin').default, 'admin');

      return {
        title,
        chunk: 'admin',
        component: <Layout><Admin title={title} /></Layout>,
      };
    },
  },{
    path: '/users',
     action() {

      return {
        title: 'admin/users page',
        component: <Layout><NewRoute title={title} /></Layout>,
      };
    },
  },{
    path: '/users/:username',
    action({params}) {
      console.log(params.username)
      return {
        title: 'admin/users page',
        component: <Layout><NewRoute title={title} username={params.username}/></Layout>,
      };
    },
  }]

};
