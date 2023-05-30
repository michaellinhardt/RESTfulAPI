import * as config from '../config'

export class ImporterSuperclass {
	constructor () {
		this.importConfig()
	}

	importConfig () {
		this.config = config
	}
}
