/*
 1) Be sure you've run bin/register.
 2) Copy this file to config/development.js.
 3) Then, edit the CAPITALIZED attributes below (see the usergrid section).
 */
'use strict';

module.exports = {

  app: {
    port: (process.env.PORT || 3000)
  },

  // https://apigee.com/usergrid/#!/getting-started/setup
  usergrid : {
    url: 'https://api.usergrid.com',
    orgName: 'ORGANIZATION',
    appName: 'APPLICATION',
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
    logging: false,
    buildCurl: false
  },

  /*
   automatically reaps any users marked as "guest" when their time is up
   frequency: how often (in ms) to attempt the reaping (default: 3600000 (one hour))
   age: how old a User can live (time since last modified) (default: 86400000 (one day))
   set frequency or age to 0 to disable Carrousel
   */
  guestUserReaper: {
    frequency: 3600000,
    age: 86400000
  },

  /*
   default logger is winston (https://github.com/flatiron/winston)
   by default, logs to console w/ coloring
   specify "file: <filename>" to send output to a file (JSON format)
   or specify "provider: <provider" to change/configure provider
   */
  logger: {
//    provider: winston
//    file: '/Users/sganyo/dev/phrixus/log/phrixus.log'
  },

  /*
   default events provider is pubsub-js (https://github.com/mroderick/PubSubJS)
   specify "sendToLogger: <info>" to send all events to the logger at the specified level (omit to skip)
   specify "provider: <provider>" to change/configure provider
   */
  events: {
    sendToLogger: 'debug'
//    provider: pubsub-js
  },

  oauth: {
    management: require('volos-management-redis'),
    provider: require('volos-oauth-redis')
//    config: { }
  },

  passport: {
    // https://developers.facebook.com/x/apps/594397020630491/dashboard/
    facebook: {
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/facebook/callback'
    },

    // https://dev.twitter.com/apps/5739904/show
    twitter: {
      consumerKey: '',
      consumerSecret: '',
      callbackURL: '/auth/twitter/callback'
    },

    // https://cloud.google.com/console/project/apps~phrixus-test/apiui/credential
    google: {
      clientID: '',
      clientSecret: '',
      callbackURL: '/auth/google/callback'
    }
  }
};
