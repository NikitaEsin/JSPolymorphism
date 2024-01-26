class User {
  constructor(email, subscription) {
    this.email = email;
    this.subscription = subscription || new FakeSubscription(this);
  }

  getCurrentSubscription() {
    return this.subscription;
  }

  isAdmin() {
    // Проверка по емейлу, просто для демонстрации
    return this.email === 'rakhim@hexlet.io';
  }
}

export default User;