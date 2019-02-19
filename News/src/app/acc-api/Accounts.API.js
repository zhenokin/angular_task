'use strict';

class AccountsAPI {
  logIn(user) {
    const req = new Request('http://localhost:3000/aut', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return fetch(req)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  singUp(user) {
    const req = new Request('http://localhost:3000/reg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    return fetch(req)
      .then(response => response.json())
      .catch(err => err.json());
  }

  logOut() {
    const req = new Request('http://localhost:3000/logOut', {
      method: 'GET'
    });
    return fetch(req)
      .then(response => response.json())
      .catch(err => console.log(err));
  }

  getActiveUser() {
    const req = new Request('http://localhost:3000/getActiveUser', {
      method: 'GET'
    });
    return fetch(req)
      .then(response => response.json())
      .catch(err => console.log(err));
  }
}
const AccAPI = new AccountsAPI();

export { AccAPI };
