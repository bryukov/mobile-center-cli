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
 * Initializes a new instance of the Audience class.
 * @constructor
 * Audience with details.
 *
 * @member {boolean} [enabled]  Default value: true .
 * 
 * @member {object} [customProperties] Custom properties used in the
 * definition.
 * 
 * @member {number} [estimatedTotalCount] Estimated total audience size.
 * 
 * @member {date} [timestamp] Date the audience was last refreshed.
 * 
 */
function Audience() {
  Audience['super_'].call(this);
}

util.inherits(Audience, models['AudienceSummary']);

/**
 * Defines the metadata of Audience
 *
 * @returns {object} metadata of Audience
 *
 */
Audience.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Audience',
    type: {
      name: 'Composite',
      className: 'Audience',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        description: {
          required: false,
          serializedName: 'description',
          type: {
            name: 'String'
          }
        },
        estimatedCount: {
          required: false,
          serializedName: 'estimated_count',
          type: {
            name: 'Number'
          }
        },
        definition: {
          required: false,
          serializedName: 'definition',
          type: {
            name: 'String'
          }
        },
        state: {
          required: false,
          serializedName: 'state',
          type: {
            name: 'String'
          }
        },
        enabled: {
          required: false,
          serializedName: 'enabled',
          defaultValue: true,
          type: {
            name: 'Boolean'
          }
        },
        customProperties: {
          required: false,
          serializedName: 'custom_properties',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        estimatedTotalCount: {
          required: false,
          serializedName: 'estimated_total_count',
          type: {
            name: 'Number'
          }
        },
        timestamp: {
          required: false,
          serializedName: 'timestamp',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = Audience;
