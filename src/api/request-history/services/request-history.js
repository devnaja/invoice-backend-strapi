'use strict';

/**
 * request-history service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::request-history.request-history');
