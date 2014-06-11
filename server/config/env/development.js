'use strict';

module.exports = {
    //db: 'mongodb://localhost/mean-dev',
    db: 'mongodb://meanadmin:password123@kahana.mongohq.com:10066/app26266092',
    app: {
        name: 'MEAN - FullStack JS - Development'
    },
    facebook: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
        clientID: '913460160380-gbqqfl7f3tlb2i054g9gmk4d0rgs2oti.apps.googleusercontent.com',//'APP_ID',
        clientSecret: 'czGIxs_BbpAhb4s7Hugrei21',//'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};
