class Walking {
  step = 1;

  constructor(streets) {
    this.streets = streets;
  }

  getNextTurn(currentStreet) {
    const currentIndex = this.streets.indexOf(currentStreet) + this.step;
    if (currentIndex >= this.streets.length) {
      return null;
    }

    return this.streets[currentIndex];
  }
}

class Driving {
  step = 2;

  constructor(streets) {
    this.streets = streets;
  }

  getNextTurn(currentStreet) {
    const currentIndex = this.streets.indexOf(currentStreet) + this.step;
    if (currentIndex >= this.streets.length) {
      return null;
    }

    return this.streets[currentIndex];
  }
}

class Navigator {
  constructor(streets, type = 'walking') {
    this.streets = streets;
    switch (type) {
      case 'walking':
        this.strategy = new Walking(this.streets);
        break;
      case 'driving':
        this.strategy = new Driving(this.streets);
        break;
    }
    [this.currentStreet] = this.streets;
  }

  goToNextTurn() {
    this.currentStreet = this.strategy.getNextTurn(this.currentStreet);

    return this.currentStreet ?? null;
  }
}