import styled from 'styled-components'
import Head from 'next/head'
import Container from '../components/styles/Container'
import Header from '../components/styles/Header'
import Events from '../components/Events'

const Content = styled.main`
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.secondary};
	margin-bottom: 100px;
`

const Introduction = styled.div`
	margin-top: 60px;

	h2 {
		font-size: 30px;
	}
`

export default () => (
	<>
		<Head>
			<title key="title">Events | Mental Health Week</title>
		</Head>
		<Header
			title="Mental Health Week"
			date="Monday 3rd of May - Friday 7th of May"
			secondaryTitle="Your mental health matters"
		/>
		<Content>
			<Container>
				<Introduction>
					<h2>Event Schedule</h2>
				</Introduction>
				<Events />
			</Container>
		</Content>
	</>
)
