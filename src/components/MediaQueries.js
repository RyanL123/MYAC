import { useMediaQuery } from "react-responsive"

export const isMobile = () => {
    return useMediaQuery({ maxWidth: 1200 })
}

export const Mobile = ({ children }) => (isMobile() ? children : null)

export const Desktop = ({ children }) => (!isMobile() ? children : null)
