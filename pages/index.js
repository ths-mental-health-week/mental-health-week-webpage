import styled from 'styled-components'
import Container from '../components/styles/Container'
import Header from '../components/styles/Header'
import SkewedLink from '../components/styles/SkewedLink'
import Divider from '../components/styles/Divider'
import TextImageRow from '../components/TextImageRow'
import screenSizes from '../utils/screen-sizes'

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

export default () => (
	<>
		<Header
			title="Mental Health Week"
			secondaryTitle="Your mental health matters"
		/>
		<Content>
			<Container>
				<Recruitment>
					<h2>We are now recruiting!</h2>
					<p>
						Do you want to be a part of Mental Health Week 2020?
						Join us and make a difference! 
						Click below to find our recruitment form. 
						<a href="https://forms.gle/78w1rqQZcdQ1dm3X9">Join Mental Health Week 2020!</a>
						
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
				<Divider />

				<SponsorsWrapper>
					<h2>Our sponsors</h2>
					<PrimarySponsors>
						<SponsorImage>
							<img
								src="/static/logos/Crebel.png"
								alt="Crebel Consulting"
							/>
						</SponsorImage>
						<SponsorImage className="erasmus-image">
							<img
								src="/static/logos/eu_flag.svg"
								alt="Erasmus"
							/>
						</SponsorImage>
					</PrimarySponsors>
					<SecondarySponsors>
						<SponsorImage>
							<img
								src="/static/logos/kth_hallen.svg"
								alt="KTH Hallen | Nordic Wellness"
							/>
						</SponsorImage>
						<SponsorImage>
							<img
								src="/static/logos/sidekick.svg"
								alt="Sidekick Coffee"
							/>
						</SponsorImage>
						<SponsorImage>
							<img
								src="/static/logos/Smiling color.png"
								alt="Smiling"
							/>
						</SponsorImage>
					</SecondarySponsors>
				</SponsorsWrapper>
			</Container>
		</Content>
	</>
)
