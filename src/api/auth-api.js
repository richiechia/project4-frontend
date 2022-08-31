import { apiService } from '../services/api.service';

class AuthApi {
  async signIn({ loginMap }) {
    return new Promise((resolve, reject) => {
      try {
        const user = apiService.post('/auth/signIn', {
          loginMap
        });

        resolve(user);
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  async reAuth(query) {
    return new Promise((resolve, reject) => {
      try {
        const resp = apiService.get(`/auth/re-auth`);
        resolve(resp);
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  async verifySignIn(query) {
    return new Promise((resolve, reject) => {
      try {
        const resp = apiService.get(`/auth/verify-signin`);
        resolve(resp);
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  async logout() {
    return new Promise((resolve, reject) => {
      try {
        resolve(apiService.get('/auth/logout'));
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  me(data) {
    return new Promise((resolve, reject) => {
      try {
        resolve(data);
      } catch (err) {
        console.error('[Auth Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const authApi = new AuthApi();
