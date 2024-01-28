class ConfigFactory {
  static factory(filePath) {
    const fileExtension = path.extname(filePath).toLowerCase();
    const fileData = fs.readFileSync(filePath, 'utf-8');

    let parsedData;
    switch (fileExtension) {
      case '.json':
        parsedData = JsonParser.parse(fileData);
        break;
      case '.yaml':
      case '.yml':
        parsedData = YamlParser.parse(fileData);
        break;
      default:
        throw new Error(Unsupported `file format: ${fileExtension}`);
    }

    return new Config(parsedData);
  }
}

class JsonParser {
  static parse(data) {
    return JSON.parse(data);
  }
}

class YamlParser {
  static parse(data) {
    return yaml.load(data);
  }
}

class Config {
  constructor(data = {}) {
    this.data = data;
  }

  getValue(key) {
    const result = this.data[key];
    if (result instanceof Object) {
      return new Config(result);
    }
    return result;
  }
}
class LabelTag {
  constructor(labelText, innerTag) {
    this.labelText = labelText;
    this.innerTag = innerTag;
  }

  render() {
    return <label>${this.labelText}${this.innerTag.render()}</label>;
  }
}