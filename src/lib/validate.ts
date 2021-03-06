interface Item {
  type: 'string' | 'number' | 'object' | 'boolean';
  optional?: boolean;
}

export interface InputSchema {
  [id: string]: Item;
}

interface Data {
  [id: string]: any;
}

const validate = (schema: InputSchema, data: Data) => {
  Object.keys(schema).map((key) => {
    const prop = schema[key];
    const option = data[key] || undefined;

    if (!option && !prop.optional) {
      throw Error(`key [${key}] is required`);
    }

    const optionType = typeof option;

    if (optionType === 'undefined' && prop.optional) {
      return;
    }

    if (optionType !== prop.type) {
      throw Error(`Invalid type ${optionType} for option ${key}. Expected ${prop.type}`);
    }

    return;
  });
};

export default validate;
