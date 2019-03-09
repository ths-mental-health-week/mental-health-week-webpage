import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import Page from '../components/Page'

const GlobalStyle = createGlobalStyle`
	::selection {
		background: ${props =>
			props.theme.colors.selection}; /* WebKit/Blink Browsers */
	}

	::-moz-selection {
		background: ${props => props.theme.colors.selection}; /* Gecko Browsers */
	}

	body {
		margin: 0;
		background-color: ${props => props.theme.colors.white};
		color: ${props => props.theme.colors.black};
		/* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
		font-family: 'Roboto', sans-serif;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: 'Rubik', sans-serif;
	}

	p {
		line-height: 1.75;
		font-size: 16px;
	}
`

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<Container>
				<Page>
					<GlobalStyle />
					<Component {...pageProps} />
				</Page>
			</Container>
		)
	}
}
