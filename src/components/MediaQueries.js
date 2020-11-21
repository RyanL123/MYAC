import { useMediaQuery } from "react-responsive"

export const IsMobile = () => {
    return useMediaQuery({ maxWidth: 1200 })
}

export const Mobile = ({ children }) => (IsMobile() ? children : null)

export const Desktop = ({ children }) => (!IsMobile() ? children : null)
