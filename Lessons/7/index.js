class Guest {
  constructor() {
    this.isGuest = true;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.isGuest = false;
  }

  getName() {
    return this.name;
  }
}

function getGreeting(user) {
  if (user.isGuest) {
    return 'Nice to meet you Guest!';
  }
  return `Hello ${user.getName()}!`;
}