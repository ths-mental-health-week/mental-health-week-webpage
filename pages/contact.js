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

export default () => (
	<>
		<Head>
			<title key="title">Contact | THS Mental Health Week</title>
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
	</>
)
