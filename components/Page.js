import { ThemeProvider } from 'styled-components'
import Meta from './Meta'
import Footer from './Footer'
// import Header from './Header'
import theme from '../utils/theme'

const Page = ({ children }) => (
	<ThemeProvider theme={theme}>
		<div>
			<Meta />
			{/* <Header /> */}
			<>{children}</>
			<Footer />
		</div>
	</ThemeProvider>
)

export default Page
