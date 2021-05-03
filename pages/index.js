import styled from 'styled-components'
import Container from '../components/styles/Container'
import Header from '../components/styles/Header'
import SkewedLink from '../components/styles/SkewedLink'
import Divider from '../components/styles/Divider'
import TextImageRow from '../components/TextImageRow'
// import screenSizes from '../utils/screen-sizes'

const Content = styled.main`
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.secondary};
	margin-bottom: 100px;
`

const Introduction = styled.div`
	margin-top: 60px;

	h2 {
		text-align: center;
	}
`

const Recruitment = styled.div`
	margin-top: 60px;

	h1 {
		text-align: center;
	}
	SkewedLink {
		text-align: center;
	}
`

/*
const SponsorsWrapper = styled.div`
	max-width: 700px;
	margin: 0 auto;

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		max-width: 300px;
	}

	h2 {
		text-align: center;
	}
`

const PrimarySponsors = styled.div`
	display: grid;
	grid-gap: 50px;
	grid-template-columns: 1fr 1fr;
	grid-auto-flow: dense;

	margin: 50px 0;

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		grid-template-columns: 1fr;
	}
`

const SecondarySponsors = styled.div`
	display: grid;
	grid-gap: 50px;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-flow: dense;

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		grid-template-columns: 1fr;
	}
`

const SponsorImage = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
	}

	&.erasmus-image img {
		width: 70%;
	}
`
*/

export default () => (
	<>
		<Header
			title="Mental Health Week 2021"
			date="Monday 3rd of May - Friday 7th of May"
			secondaryTitle="Your mental health matters"
		/>
		<Content>
			<Container>
				<Recruitment>
					<h1>We are about to kick off!</h1>
					<p>
						THS Mental Health Week is about to kick off for 2021! We
						have five days of events ready to go starting on Monday
						the 3rd of May. Head over to the{' '}
						<a href="/events">events page</a> to learn more and
						register.
					</p>
				</Recruitment>
				<Divider />
				<Introduction>
					<h2>What is Mental Health Week?</h2>
					<p>
						We believe that solutions happen when we start sharing
						what’s going on in our minds to friends, family and even
						strangers. Mental Health Week is the place where you can
						share your story of mental health challenges and learn
						without any fear or restriction. A series of lectures
						and activities on a different theme every day, where
						everyone is welcome whether you are seeking help or if
						you are curious about Mental Health issues.
					</p>
				</Introduction>
				<Divider />
				<TextImageRow
					imgSrc="/static/images/calendar.svg"
					imgAlt="Calendar icon"
					title="Upcoming events"
				>
					<p>
						A week full of lectures, activities and opportunities to
						connect. Choose your pick or come for all.
					</p>
					<SkewedLink href="/events" marginLeft>
						Event Schedule
					</SkewedLink>
				</TextImageRow>
				<TextImageRow
					imgSrc="/static/images/mental-health.svg"
					imgAlt=""
					title="Take care of yourself"
					inverse
				>
					<p>
						Make your mental health a priority. Whether you need
						help or if you are curious about learning more about how
						your mind works, Mental Health Week is here to give you
						the tools.
					</p>
				</TextImageRow>
			</Container>
		</Content>
	</>
)
