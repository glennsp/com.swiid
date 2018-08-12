'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class SwiidInter extends ZwaveDevice {

	async onMeshInit() {

		this.printNode();
		this.registerCapability('onoff', 'SWITCH_BINARY');
	}

}

module.exports = SwiidInter;
