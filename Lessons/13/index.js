class TcpConnection {
    constructor(ip, port) {
      this.ip = ip;
      this.port = port;
      this.connectedState = new ConnectedState(this);
      this.disconnectedState = new DisconnectedState(this);
      this.currentState = this.disconnectedState;
    }

    connect() {
      this.currentState.connect();
    }

    write(data) {
      this.currentState.write(data);
    }

    disconnect() {
      this.currentState.disconnect();
    }

    getCurrentState() {
      const stateName = this.currentState.constructor.name;
      const suffixIndex = stateName.toLowerCase().indexOf('state');
      return suffixIndex !== -1 ? stateName.toLowerCase().substring(0, suffixIndex) : stateName.toLowerCase();
    }

    setState(newState) {
      this.currentState = newState;
    }
}


class ConnectedState {
    constructor(connection) {
      this.connection = connection;
    }

    write(data) {
      console.log(Sending `data: ${data}`);
    }

    disconnect() {
      console.log('Disconnecting...');
      this.connection.setState(this.connection.disconnectedState);
    }

}

class DisconnectedState {
    constructor(connection) {
      this.connection = connection;
    }

    connect() {
      console.log('Connecting...');
      this.connection.setState(this.connection.connectedState);
    }

    write(data) {
      throw new Error('Connection is not established');
    }

    disconnect() {
      throw new Error('Connection is already disconnected');
    }
}