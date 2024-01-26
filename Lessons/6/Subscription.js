class Subscription {
  constructor(type) {
    this.type = type;
  }

  hasPremiumAccess() {
    return this.type === 'premium';
  }

  hasProfessionalAccess() {
    return this.type === 'professional';
  }
}

export default Subscription;