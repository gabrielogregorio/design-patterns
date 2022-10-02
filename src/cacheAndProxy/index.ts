enum TemperatureCitiesEnum {
  'NEW YORK' = 'NEW YORK',
  'SAO PAULO' = 'SAO PAULO',
  'LAS VEGAS' = 'LAS VEGAS',
}

class ExternalApi {
  static getTemperature(city: TemperatureCitiesEnum): string {
    console.log('call external api', city);

    switch (city) {
      case TemperatureCitiesEnum['LAS VEGAS']: {
        return 'LV - 36°C';
      }
      case TemperatureCitiesEnum['SAO PAULO']: {
        return 'SP - 39°C';
      }
      case TemperatureCitiesEnum['NEW YORK']: {
        return 'NY - 29°C';
      }
      default: {
        throw new Error("City don't exists");
      }
    }
  }
}

class ApiProxy {
  cache = {};

  getValue(city: TemperatureCitiesEnum): string {
    if (Boolean(this.cache[city]) === false) {
      this.cache[city] = ExternalApi.getTemperature(city);
    }

    return this.cache[city];
  }
}

// ExternalApi.getTemperature(TemperatureCitiesEnum['LAS VEGAS']);
// ExternalApi.getTemperature(TemperatureCitiesEnum['NEW YORK']);
// ExternalApi.getTemperature(TemperatureCitiesEnum['SAO PAULO']);

const proxy: ApiProxy = new ApiProxy();

proxy.getValue(TemperatureCitiesEnum['LAS VEGAS']);
proxy.getValue(TemperatureCitiesEnum['NEW YORK']);
proxy.getValue(TemperatureCitiesEnum['SAO PAULO']);

proxy.getValue(TemperatureCitiesEnum['LAS VEGAS']);
proxy.getValue(TemperatureCitiesEnum['NEW YORK']);
proxy.getValue(TemperatureCitiesEnum['SAO PAULO']);

proxy.getValue(TemperatureCitiesEnum['LAS VEGAS']);
proxy.getValue(TemperatureCitiesEnum['NEW YORK']);
proxy.getValue(TemperatureCitiesEnum['SAO PAULO']);
