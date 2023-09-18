'use strict';

/**
 * our-facility service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-facility.our-facility');
