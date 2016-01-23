/*
* @Author: ben_cripps
* @Date:   2015-05-18 20:58:33
* @Last Modified by:   ben_cripps
* @Last Modified time: 2016-01-17 19:35:26
*/

import { Functions } from './functions';

const funcs = new Functions();

const scriptSrc = {
    main: ['main.js'],
    post: ['post.js', 'main.js'],
    createBlog: ['main.js', 'createBlog.js']
};

export const routes = [
    {
        uri: '/',
        method: 'get',
        func: funcs.idx,
        vars: {
            scripts: scriptSrc.main,
            routeName: 'index',
            routeTitle: 'home'
        }
    },
    {
        uri: '/index.html',
        method: 'get',
        func: funcs.idx,
        vars: {
            scripts: scriptSrc.main,
            routeName: 'index',
            routeTitle: 'home'
        }
    },
    {
        uri: '/simple',
        method: 'get',
        func: funcs.idx,
        vars: {
            scripts: scriptSrc.main,
            routeName: 'simple',
            routeTitle: 'home'
        }
    }, 
    {
        uri: '/complex',
        method: 'get',
        func: funcs.idx,
        vars: {
            scripts: scriptSrc.main,
            routeName: 'complex',
            routeTitle: 'home'
        }
    },
    {
        uri: '/getFakeData',
        method: 'get',
        func: funcs.getFakeData,
        vars: {}
    },
    {
        uri: '/getFakedPagedData',
        method: 'post',
        func: funcs.getFakeDataPaged,
        vars: {}
    }
];