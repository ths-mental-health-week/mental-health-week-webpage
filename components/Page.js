import styled, { ThemeProvider } from 'styled-components'
import Meta from './Meta'
import Footer from './Footer'
import Navbar from './Navbar'
// import Header from './Header'
import theme from '../utils/theme'

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100%;
`

const FlexContent = styled.div`
	flex: 1;
`

const Page = ({ children }) => (
	<ThemeProvider theme={theme}>
		<>
			<Navbar />
			<PageWrapper>
				<Meta />
				{/* <Header /> */}
				<FlexContent>{children}</FlexContent>
				<Footer />
			</PageWrapper>
		</>
	</ThemeProvider>
)

export default Page
