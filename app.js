'use strict';

const Homey = require('homey');

class SwiidApp extends Homey.App {

	onInit() {
		console.log(`${Homey.manifest.id} is running...`);
	}

}

module.exports = SwiidApp;
