export function capitalize(str: string) {
    return str.replace(/\b\w/g, function (match) {
      return match.toUpperCase();
    });
  }