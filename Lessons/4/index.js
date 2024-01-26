const fs = require('fs');
const path = require('path');

class DatabaseConfigLoader {
  constructor(configPath) {
    this.configPath = configPath;
  }

  load(env) {
    const configFileName = `database.${env}.json`;
    const configFilePath = path.join(this.configPath, configFileName);

    if (!fs.existsSync(configFilePath)) {
      throw new Error(`Config file not found: ${configFileName}`);
    }

    const configContent = fs.readFileSync(configFilePath, 'utf-8');
    const config = JSON.parse(configContent);

    if (config.extend) {
      const extendedConfig = this.load(config.extend);
      delete config.extend;
      return { ...extendedConfig, ...config };
    }

    return config;
  }
}

const pathToConfigs = '/path/to/configs';
const loader = new DatabaseConfigLoader(pathToConfigs);
const config = loader.load('production');
console.log(config);
