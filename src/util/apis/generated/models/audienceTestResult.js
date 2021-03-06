/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AudienceTestResult class.
 * @constructor
 * Audience test result.
 *
 * @member {string} [definition] Audience definition in OData format.
 * 
 * @member {object} [customProperties] Custom properties used in the
 * definition.
 * 
 * @member {number} [estimatedCount] Estimated audience size.
 * 
 * @member {number} [estimatedTotalCount] Estimated total audience size.
 * 
 */
function AudienceTestResult() {
}

/**
 * Defines the metadata of AudienceTestResult
 *
 * @returns {object} metadata of AudienceTestResult
 *
 */
AudienceTestResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AudienceTestResult',
    type: {
      name: 'Composite',
      className: 'AudienceTestResult',
      modelProperties: {
        definition: {
          required: false,
          serializedName: 'definition',
          type: {
            name: 'String'
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
        estimatedCount: {
          required: false,
          serializedName: 'estimated_count',
          type: {
            name: 'Number'
          }
        },
        estimatedTotalCount: {
          required: false,
          serializedName: 'estimated_total_count',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = AudienceTestResult;
