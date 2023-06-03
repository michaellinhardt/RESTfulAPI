import * as packageHelpers from '@michaellinhardt/helpers'
import * as packageConfig from '../config'
import * as packageApis from '../apis'

export class ImporterSuperclass {
	constructor () {
		const projectSrcFolder = packageConfig.path.project.src
		const { getMergedNpmAndProjectObj } = packageHelpers.npm

		// this.config = {
		// 	...packageConfig,
		// }

		const test = require('./../../src/config/index.js')
		console.debug('test', test)

		// this.config = getMergedNpmAndProjectObj('config', packageConfig, projectSrcFolder)
		// this.helpers = getMergedNpmAndProjectObj('helpers', packageHelpers, projectSrcFolder)
		// this.apis = getMergedNpmAndProjectObj('apis', packageApis, projectSrcFolder)
	}
}

