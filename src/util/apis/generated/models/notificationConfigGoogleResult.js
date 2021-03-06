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
 * Initializes a new instance of the NotificationConfigGoogleResult class.
 * @constructor
 * Google notification configuration result.
 *
 * @member {string} googleApiKey GCM API key.
 * 
 */
function NotificationConfigGoogleResult() {
  NotificationConfigGoogleResult['super_'].call(this);
}

util.inherits(NotificationConfigGoogleResult, models['NotificationConfigResult']);

/**
 * Defines the metadata of NotificationConfigGoogleResult
 *
 * @returns {object} metadata of NotificationConfigGoogleResult
 *
 */
NotificationConfigGoogleResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NotificationConfigGoogleResult',
    type: {
      name: 'Composite',
      className: 'NotificationConfigGoogleResult',
      modelProperties: {
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        googleApiKey: {
          required: true,
          serializedName: 'google_api_key',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NotificationConfigGoogleResult;
