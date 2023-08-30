'use strict';

/**
 * dentist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dentist.dentist');
