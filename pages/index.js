import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'
import Container from '../components/styles/Container'
import Header from '../components/styles/Header'
import SkewedLink from '../components/styles/SkewedLink'
import Divider from '../components/styles/Divider'
import Footer from '../components/Footer'

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

const TextImageRow = styled.div`
	width: 100;
	display: grid;
	grid-gap: 100px;
	grid-template-columns: 1fr 1fr;

	justify-content: center;
	align-items: center;

	.img-wrapper,
	.text-wrapper {
	}

	.img-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: end;

		img {
			flex: 1;
			max-width: 200px;
			max-height: 200px;
		}
	}

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		grid-template-columns: 1fr;
	}
`

export default () => (
	<>
		<Header
			title="THS Mental Health Week"
			secondaryTitle="You gotta nourish to flourish"
		/>
		<Content>
			<Container>
				<Introduction>
					<h2>What is Mental Health Week?</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aliquam dictum, diam sed viverra scelerisque, nisl nisi
						pharetra neque, id congue lacus mauris non urna. Ut
						rhoncus mauris vel est condimentum ultricies. Morbi eu
						pellentesque leo. In ultrices nunc nisi, a pharetra nisl
						consectetur a. Cras at neque arcu. Aliquam efficitur
						suscipit tristique. Quisque euismod fringilla sagittis.
						Integer dictum facilisis volutpat. Ut in enim eget elit
						sollicitudin interdum id quis magna.
					</p>
					<p>
						Morbi ut nisi sagittis, suscipit quam et, fermentum est.
						Mauris consequat semper enim sed commodo. Duis fermentum
						non leo semper viverra. Cras id eleifend nisl. Mauris id
						sem at ligula convallis maximus. Nam accumsan suscipit
						nunc et blandit. Proin tincidunt ac nulla vel finibus.
						Vestibulum at erat quis risus varius rhoncus vitae at
						urna. Duis tristique hendrerit justo eu lacinia. Nullam
						non faucibus sapien, sed tincidunt mauris.
					</p>
				</Introduction>
				<Divider />
				<TextImageRow>
					<div className="img-wrapper">
						<img
							alt="Calendar icon"
							src="/static/images/calendar.svg"
							style={{
								width: '200px'
							}}
						/>
					</div>
					<div
						className="text-wrapper"
						style={{ paddingRight: '100px' }}
					>
						<h2>Upcoming events</h2>
						<p>
							Participate in our upcoming lectures and workshops
							to learn more about mental health, and how you can
							take better care of yourself.
						</p>
						<SkewedLink href="/schedule">Event Schedule</SkewedLink>
					</div>
				</TextImageRow>
				<div style={{ marginTop: '100px' }} />
				<TextImageRow>
					<div
						className="text-wrapper"
						style={{ paddingLeft: '100px', textAlign: 'right' }}
					>
						<h2 style={{ textAlign: 'right' }}>
							Take care of yourself
						</h2>
						<p style={{ textAlign: 'right' }}>
							Participate in our upcoming lectures and workshops
							to learn more about mental health, and how you can
							take better care of yourself.
						</p>

						<SkewedLink href="/schedule">Learn more</SkewedLink>
					</div>
					<div
						className="img-wrapper"
						style={{ justifyContent: 'start' }}
					>
						<img
							alt="Mental health icon"
							src="/static/images/mental-health.svg"
							style={{
								width: '200px'
							}}
						/>
					</div>
				</TextImageRow>
			</Container>
		</Content>
		<Footer />
	</>
)
