import { Theme } from '@emotion/react'

const theme: Theme = {
    breakpoints: {
        lg: '1280',
        md: '1024',
        sm: '640',
    },
}

const indexedBreakpoints = theme.breakpoints as { [id: string]: string }

export const mq = Object.keys(theme.breakpoints)
    .map((key) => [key, indexedBreakpoints[key]])
    .reduce<{ [index: string]: string }>((prev, [key, breakpoint]) => {
        prev[key] = `@media (width >= ${breakpoint}px)`
        return prev
    }, {})

export default theme
