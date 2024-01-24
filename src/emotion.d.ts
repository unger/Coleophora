import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        breakpoints: {
            sm: string
            md: string
            lg: string
        }
    }
}
