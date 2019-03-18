import styled from 'styled-components'
import Container from './styles/Container'
import FacebookIcon from './icons/Facebook'
import InstagramIcon from './icons/Instagram'
import screenSizes from '../utils/screen-sizes'
import contactInfo from '../utils/contactInfo'

const Footer = styled.footer`
	display: block;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.darkGrey};
	color: ${({ theme }) => theme.colors.white};
	font-size: 10px;
	margin-top: 50px;

	a {
		color: ${({ theme }) => theme.colors.white};
		transition: all 0.2s;
	}

	a:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`

const FlexWrapper = styled.div`
	margin: 50px 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		flex-direction: column;
	}
`

const FlexColumn = styled.div`
	flex: 1;
	margin: 0 4%;
	margin-bottom: 0;

	h2 {
		margin: 0 0 5px 0;
		line-height: 1.25;
		font-size: 20px;
		font-weight: bold;
	}

	p {
		line-height: 1.25;
		font-size: 15px;
		font-weight: lighter;
	}

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		margin: 0 8%;
		margin-bottom: 50px;

		&:last-of-type {
			margin-bottom: 0;
		}
	}

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		margin: 0 0;
		margin-bottom: 50px;
	}
`

const IconWrapper = styled.div`
	display: flex;
`

const Icon = styled.a`
	margin-right: 15px;
	padding: 10px;
	box-sizing: content-box;
	border-radius: 0px;
	display: block;
	height: 20px;
	width: 20px;
	border: 2px solid;
	border-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.white};
	transition: all 0.2s;

	&:hover {
		color: ${({ theme }) => theme.colors.darkGrey};
		background-color: ${({ theme }) => theme.colors.white};
	}
`

const Disclaimer = styled.div`
	font-size: 12px;
`

export default () => (
	<Footer>
		<Container>
			<FlexWrapper>
				<FlexColumn>
					<h2>THS Mental Health Week</h2>
					<p>
						THS Mental Health Week is a project week which aims to
						educate and inform students about mental health.
					</p>
				</FlexColumn>
				<FlexColumn>
					<h2>Contact us</h2>
					<p>
						Email:{' '}
						<a href={`mailto:${contactInfo.email}`}>
							{contactInfo.email}
						</a>
					</p>
					<p>
						Follow us on social media for updates and anouncements!
					</p>
					<IconWrapper>
						<Icon href={contactInfo.facebook}>
							<FacebookIcon size="100%" />
						</Icon>
						<Icon href={contactInfo.instagram}>
							<InstagramIcon size="100%" />
						</Icon>
					</IconWrapper>
				</FlexColumn>
				<FlexColumn>
					<Disclaimer>
						<p>© 2019 THS Mental Health Week</p>
						<p>
							Icons used on the page are made by{' '}
							<a
								href="https://www.flaticon.com/authors/catkuro"
								title="catkuro"
							>
								catkuro
							</a>{' '}
							and{' '}
							<a
								href="https://www.flaticon.com/authors/kiranshastry"
								title="Kiranshastry"
							>
								Kiranshastry
							</a>{' '}
							from{' '}
							<a
								href="https://www.flaticon.com/"
								title="Flaticon"
							>
								www.flaticon.com
							</a>{' '}
							and are licensed by{' '}
							<a
								href="http://creativecommons.org/licenses/by/3.0/"
								title="Creative Commons BY 3.0"
							>
								CC 3.0 BY
							</a>
						</p>
					</Disclaimer>
				</FlexColumn>
			</FlexWrapper>
		</Container>
	</Footer>
)
