import { HelmetProvider,} from "react-helmet-async"
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@emotion/react'
import rtlPlugin from "stylis-plugin-rtl"
import createCache from "@emotion/cache"
import { prefixer } from "stylis"

import {theme} from "../Theme"

//todo : Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});



const MainLayout = ({ children }) => {
    return (

        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    
                    {children}
                </HelmetProvider>

            </ThemeProvider>
        </CacheProvider>

    );
}

export default MainLayout;