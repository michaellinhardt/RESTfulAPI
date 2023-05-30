process.env.NODE_ENV = process.env.NODE_ENV || 'development'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import { ImporterSuperclass } from './superclass'

class Application extends ImporterSuperclass {
	constructor () {
		super()
		console.log('i exist')
		console.log(this.config.env)
	}
}

export default Application
