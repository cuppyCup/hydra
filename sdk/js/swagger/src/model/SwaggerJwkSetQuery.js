/**
 * ORY Hydra
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.
 *
 * OpenAPI spec version: latest
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OryHydra) {
      root.OryHydra = {};
    }
    root.OryHydra.SwaggerJwkSetQuery = factory(root.OryHydra.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SwaggerJwkSetQuery model module.
   * @module model/SwaggerJwkSetQuery
   * @version latest
   */

  /**
   * Constructs a new <code>SwaggerJwkSetQuery</code>.
   * @alias module:model/SwaggerJwkSetQuery
   * @class
   * @param set {String} The set in: path
   */
  var exports = function(set) {
    var _this = this;

    _this['set'] = set;
  };

  /**
   * Constructs a <code>SwaggerJwkSetQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerJwkSetQuery} obj Optional instance to populate.
   * @return {module:model/SwaggerJwkSetQuery} The populated <code>SwaggerJwkSetQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('set')) {
        obj['set'] = ApiClient.convertToType(data['set'], 'String');
      }
    }
    return obj;
  }

  /**
   * The set in: path
   * @member {String} set
   */
  exports.prototype['set'] = undefined;



  return exports;
}));


