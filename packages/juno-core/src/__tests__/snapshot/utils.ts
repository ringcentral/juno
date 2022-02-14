export function isExcluded(kind: string, name: string, config: any) {
  if (
    config.name.includes(name) ||
    config.kind.includes(kind) ||
    (config.matchFunction && config.matchFunction({ kind, name }))
  ) {
    return true;
  }
  return false;
}
