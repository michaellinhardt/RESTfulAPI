import config from './config/index.js'

class Application {
	constructor () {
		console.log('npm-backend-restfulapi is running')
		this.config = config
	}

	test () {
		console.debug('test', this.config.fake.fake)
	}
}

export default Application
