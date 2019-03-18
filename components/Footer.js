import styled from 'styled-components'
import Container from './styles/Container'
import FacebookIcon from './icons/Facebook'
import InstagramIcon from './icons/Instagram'

const Footer = styled.footer`
	display: block;
	width: 100%;
	height: 150px;
	background-color: ${({ theme }) => theme.colors.darkGrey};
	font-size: 10px;
`

const FooterContainer = styled(Container)`
	height: 100%;
`

const Copyright = styled.p`
	font-size: 10px;
	margin: 0;
	margin-bottom: 10px;
`

const Disclaimer = styled.div`
	max-width: 70%;
`

const FlexWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const IconWrapper = styled.div`
	display: flex;
`

const Icon = styled.a`
	margin-left: 10px;
	padding: 10px;
	box-sizing: border-box;
	border-radius: 5px;
	display: block;
	height: 50px;
	width: 50px;
	border: 2px solid;
	border-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.white};
	transition: all 0.2s;

	&:hover {
		color: ${({ theme }) => theme.colors.darkGrey};
		background-color: ${({ theme }) => theme.colors.white};
	}
`

export default () => (
	<Footer>
		<FooterContainer>
			<FlexWrapper>
				<div>
					<Copyright>© 2019 THS Mental Health Week</Copyright>
					<Disclaimer>
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
						<a href="https://www.flaticon.com/" title="Flaticon">
							www.flaticon.com
						</a>{' '}
						and are licensed by{' '}
						<a
							href="http://creativecommons.org/licenses/by/3.0/"
							title="Creative Commons BY 3.0"
						>
							CC 3.0 BY
						</a>
					</Disclaimer>
				</div>
				<IconWrapper>
					<Icon href="https://www.facebook.com/thsmentalhealthweek">
						<FacebookIcon size="100%" />
					</Icon>
					<Icon href="https://www.instagram.com/thshealthweek/">
						<InstagramIcon size="100%" />
					</Icon>
				</IconWrapper>
			</FlexWrapper>
		</FooterContainer>
	</Footer>
)
