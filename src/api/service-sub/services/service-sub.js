'use strict';

/**
 * service-sub service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-sub.service-sub');
