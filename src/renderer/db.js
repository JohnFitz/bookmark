import firebase from 'firebase'

let instance = null

class Database {
  constructor () {
    if (!instance) {
      instance = this
    }
    this.config = {
      databaseURL: 'https://bookmark-adb57.firebaseio.com'
    }
    this.fire = firebase.initializeApp(this.config)
    this.db = this.fire.database()

    return instance
  }
}

export default Database
