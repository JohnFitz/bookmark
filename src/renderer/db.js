import firebase from 'firebase'

let instance = null

class Database {
  constructor () {
    if (!instance) {
      instance = this
    }
    this.config = {
      databaseURL: process.env.FIREBASE_DATABASE_URL
    }
    this.fire = firebase.initializeApp(this.config)
    this.db = this.fire.database()

    return instance
  }
}

export default Database
