import Head from 'next/head'
import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'
import contactInfo from '../utils/contactInfo'
import Container from '../components/styles/Container'
import FacebookIcon from '../components/icons/Facebook'
import InstagramIcon from '../components/icons/Instagram'
import ContactForm from '../components/ContactForm'

const ContactWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 50px;

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		flex-direction: column;
	}
`

const Column = styled.div`
	flex: 1;

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		margin-bottom: ${props => (props['margin-bottom'] ? '50px' : '0')};
	}
`

const Title = styled.h1`
	margin-top: 0;
	font-size: 35px;
	margin-bottom: 20px;
`

const ContactDetail = styled.p`
	font-size: 20px;
	margin: 0;
`

const ContactLink = styled.a`
	font-size: 20px;
	margin: 0;
	color: ${({ theme }) => theme.colors.darkGrey};

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`

const IconWrapper = styled.div`
	margin-top: 20px;
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
	border-color: ${({ theme, inverse }) =>
		inverse ? theme.colors.white : theme.colors.darkGrey};
	color: ${({ theme, inverse }) =>
		inverse ? theme.colors.white : theme.colors.darkGrey};
	transition: all 0.2s;

	&:hover {
		color: ${({ theme, inverse }) =>
			inverse ? theme.colors.darkGrey : theme.colors.white};
		background-color: ${({ theme, inverse }) =>
			inverse ? theme.colors.white : theme.colors.darkGrey};
	}
`

const ProfilesWrapper = styled.div`
	h2 {
		margin: 40px 0;
	}
`

const Profiles = styled.div`
	display: grid;
	grid-gap: 50px;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-flow: dense;

	@media screen and (max-width: ${screenSizes.tablet.max}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		grid-template-columns: 1fr;
	}
`

const ProfileCardStyle = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	img {
		width: 100%;
		object-fit: cover;
	}

	.profileName {
		text-align: center;
		margin-top: 15px;
	}

	.profilePosition {
		text-align: center;
		font-weight: 600;
		margin-top: 5px;
	}
`

const ProfileCard = ({ imgSrc, imgAlt, name, position }) => {
	return (
		<ProfileCardStyle>
			<img src={imgSrc} alt={imgAlt} />
			<div className="profileName">{name}</div>
			<div className="profilePosition">{position}</div>
		</ProfileCardStyle>
	)
}

const ProfileFullWidthWrapper = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.colors.lightGrey};
	margin-top: 50px;
	padding-top: 1px;
	padding-bottom: 50px;
`

export default () => (
	<>
		<Head>
			<title key="title">Contact | Mental Health Week</title>
		</Head>

		<Container>
			<ContactWrapper>
				<Column margin-bottom>
					<Title>Contact information</Title>
					<ContactDetail>
						Email:{' '}
						<ContactLink href={`mailto:${contactInfo.email}`}>
							{contactInfo.email}
						</ContactLink>
					</ContactDetail>
					<IconWrapper>
						<Icon href={contactInfo.facebook}>
							<FacebookIcon size="100%" />
						</Icon>
						<Icon href={contactInfo.instagram}>
							<InstagramIcon size="100%" />
						</Icon>
					</IconWrapper>
				</Column>
				<Column>
					<ContactForm />
				</Column>
			</ContactWrapper>
		</Container>

		<ProfileFullWidthWrapper>
			<Container>
				<ProfilesWrapper>
					<h2>MWH 2019 Project Team</h2>
					<Profiles>
						<ProfileCard
							imgSrc="/static/images/profile-pictures/Anna%20Strandberg-min.jpeg"
							imgAlt="Anna Strandberg"
							name="Anna Strandberg"
							position="Project Leader"
						/>
						<ProfileCard
							imgSrc="/static/images/profile-pictures/Alexi%20Ramskog-min.jpeg"
							imgAlt="Alexi Ramskog"
							name="Alexi Ramskog"
							position="Project Leader"
						/>
						<ProfileCard
							imgSrc="/static/images/profile-pictures/Sidra%20Akbar-min.jpeg"
							imgAlt="Sidra Akbar"
							name="Sidra Akbar"
							position="Project Leader"
						/>
						<ProfileCard
							imgSrc="/static/images/profile-pictures/Elin%20Dai-min.jpeg"
							imgAlt="Elin Dai"
							name="Elin Dai"
							position="Team Leader Economy"
						/>
						<ProfileCard
							imgSrc="/static/images/profile-pictures/Anton%20Hallin-min.jpeg"
							imgAlt="Anton Hallin"
							name="Anton Hallin"
							position="Team Leader Events"
						/>
						<ProfileCard
							imgSrc="/static/images/profile-pictures/Julius%20Celik-min.jpeg"
							imgAlt="Julius Celik"
							name="Julius Celik"
							position="Team Leader IT and Logistics"
						/>
					</Profiles>
				</ProfilesWrapper>
			</Container>
		</ProfileFullWidthWrapper>
	</>
)
