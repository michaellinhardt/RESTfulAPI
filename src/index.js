process.env.NODE_ENV = process.env.NODE_ENV || 'development'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { ImporterSuperclass } from './superclass/index'

class Application extends ImporterSuperclass {
	constructor () {
		super()
		console.log('i exist')
		console.log(this.config.env)
	}
}

console.debug('Backend RESTful API package loaded')

export default Application
