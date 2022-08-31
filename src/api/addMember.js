import axios from 'axios'
import { localhost } from './index.js'

class AddMemberAPI {
  constructor(localhost){
    this.localhost = localhost
  }

  async test() {
    try{
      const data = await axios.get(`${this.localhost}/memberdetails/test`)
      
      return data.data
    } catch (error) {
      console.error(error)
      return error
    }
  }

  async addMember(member) {
    try {
      const data = await axios.post(`${this.localhost}/memberdetails/addmember`, {member}, {withCredentials: true})

      
      return data.data
    } catch (error) {
      console.error(error)
      return error
    }
  }

  async getCurrentUser() {
    try {
      const data = await axios.get(`${this.localhost}/memberdetails/getCurrentUser`)
      
      return data.data
    } catch(error) {
      console.error(error)
    }
  }

}

export const addMemberAPI = new AddMemberAPI(localhost);