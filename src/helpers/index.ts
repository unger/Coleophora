export function reduceBy<T, TResult>(arr: T[], fn: (_: T) => TResult) {
    return arr.reduce<T[]>((prev, curr) => {
        const groupKey = fn(curr)
        const exists = prev.findIndex((item) => fn(item) == groupKey) !== -1
        if (!exists) {
            prev.push(curr)
        }
        return prev
    }, [])
}
