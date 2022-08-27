import axios from 'axios'
import { localhost } from './index.js'


class SignUpAPI {
  constructor(localhost){
    this.localhost = localhost
  }

  async test() {
    try {
    const data = await axios.get(`${this.localhost}/useraccounts/test`)
    console.log(data.data)
    return data.data
    } catch (error) {
        console.error(error)
        return error
      }
  }

  async sendRegistration(registerMap) {
    try {
      const response = await axios.post(`${this.localhost}/useraccounts/createuser`, {registerMap})

      return response.data
    } catch (error) {
      console.error(error)
      return error
    }
  }

}

export const signUpAPI = new SignUpAPI(localhost);