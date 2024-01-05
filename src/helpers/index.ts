export function reduceBy<T>(arr: T[], fn: (item: T) => any) {
    return arr.reduce<T[]>((prev, curr) => {
        const groupKey = fn(curr);
        var exists = prev.findIndex(item => fn(item) == groupKey) !== -1;
        if (!exists) {
          prev.push(curr);
        }
        return prev;
    }, []);
  }