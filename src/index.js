import express from 'express'

class Application {
	constructor (configs) {
		this.app = express()
		this.port = configs.port

		this.start()
	}

	start () {
		this.app.listen(this.port, () => {
			console.log(`Server listening on port ${this.port}`)
		})
	}
}

process.stdout.write('Loading RESTful API Package...\n')

export default Application
