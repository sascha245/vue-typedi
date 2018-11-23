interface OptionInjections {
  __injections__: Map<string, () => any>;
}

export function setInjection(options: any, propertyName: string, value: () => any) {
  const opt = options as OptionInjections;
  if (!opt.__injections__) {
    opt.__injections__ = new Map<string, any>();
  }
  opt.__injections__.set(propertyName, value);
}
export function getInjections(options: any) {
  const opt = options as OptionInjections;
  return opt.__injections__;
}
export function getInjection<T>(options: any, propertyName: string): (() => T) | undefined {
  const opt = options as OptionInjections;
  if (!opt.__injections__) {
    return undefined;
  }
  return opt.__injections__.get(propertyName);
}
