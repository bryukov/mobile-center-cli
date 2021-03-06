/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NotificationConfigAppleToken class.
 * @constructor
 * Apple notification auth token configuration.
 *
 * @member {string} keyId A 10-character key identifier (kid).
 * 
 * @member {string} appName The name of the application.
 * 
 * @member {string} appId A 10-character Team ID (iss).
 * 
 * @member {string} token Provider Authentication Token.
 * 
 * @member {string} endpointType Possible values include: 'production',
 * 'sandbox'
 * 
 */
function NotificationConfigAppleToken() {
  NotificationConfigAppleToken['super_'].call(this);
}

util.inherits(NotificationConfigAppleToken, models['NotificationConfig']);

/**
 * Defines the metadata of NotificationConfigAppleToken
 *
 * @returns {object} metadata of NotificationConfigAppleToken
 *
 */
NotificationConfigAppleToken.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NotificationConfigAppleToken',
    type: {
      name: 'Composite',
      className: 'NotificationConfigAppleToken',
      modelProperties: {
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        keyId: {
          required: true,
          serializedName: 'key_id',
          type: {
            name: 'String'
          }
        },
        appName: {
          required: true,
          serializedName: 'app_name',
          type: {
            name: 'String'
          }
        },
        appId: {
          required: true,
          serializedName: 'app_id',
          type: {
            name: 'String'
          }
        },
        token: {
          required: true,
          serializedName: 'token',
          type: {
            name: 'String'
          }
        },
        endpointType: {
          required: true,
          serializedName: 'endpoint_type',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NotificationConfigAppleToken;
