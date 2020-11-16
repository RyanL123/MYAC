export const isMobile = () => {
    return window.innerWidth < 1200
}

export const Mobile = ({ children }) => (isMobile() ? children : null)

export const Desktop = ({ children }) => (!isMobile() ? children : null)
