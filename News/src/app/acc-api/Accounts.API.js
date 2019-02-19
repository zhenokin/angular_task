'use strict';

class AccountsAPI {
  logIn(user) {
    const req = new Request('http://localhost:3000/aut', {
      method: 'POST',
      body: user
    });
    return fetch(req)
      .then(response => response.json())
      .then(resp => console.log(resp));
  }

  singUp(user) {
    console.log(user);
    const req = new Request('http://localhost:3000/reg', {
      method: 'POST',
      body: JSON.stringify(user)
    });
    console.log(req);
    return fetch(req)
      .then(response => response.json())
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }
}
const AccAPI = new AccountsAPI();

export { AccAPI };
