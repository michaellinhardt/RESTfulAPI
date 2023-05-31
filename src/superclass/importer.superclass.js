// import * as packageHelpers from '@michaellinhardt/helpers'
import * as packageConfig from '../config'

export class ImporterSuperclass {
	constructor () {
		this.mergePackageAndProjectObj('config', packageConfig, packageConfig.path.project.root)
	}

	mergePackageAndProjectObj (propertyName, packageObject, projectObjectPath) {
		let projectObject = {}
		try {
			projectObject = require(projectObjectPath)

		} catch (error) {
			console.warn(`No project object found for ${propertyName} or it couldn't be loaded.`)
		}

		this[propertyName] = Object.assign({}, packageObject, projectObject)
	}
}

