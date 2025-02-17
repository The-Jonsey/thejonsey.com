export class DarkModeToggledEventEmitter {
	constructor() {
		this.listeners = []
	}

	static getInstance() {
		if (!this.instance) {
			this.instance = new DarkModeToggledEventEmitter();
		}
		return this.instance
	}

	private static instance

	private listeners

	addListener(listener) {
		this.listeners.push(listener)
	}

	emit(dark) {
		this.listeners.forEach(listener => {
			listener(dark)
		});
	}
 
}