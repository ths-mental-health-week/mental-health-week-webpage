import styled from 'styled-components'
import screenSizes from '../../utils/screen-sizes'

const Wrapper = styled.header`
	text-align: center;
	width: 100%;
	height: 300px;
	padding: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};
`

const SkewBackground = styled.span`
	padding: 10px 40px;
	transform: skew(-20deg);
	background-color: ${({ theme }) => theme.colors.white};
`

const Straightener = styled.div`
	transform: skew(20deg);
	display: flex;
	align-items: center;
`

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const Title = styled.h1`
	margin: 0;
	font-size: 45px;

	@media screen and (max-width: ${screenSizes.laptop.max}) {
		font-size: 32px;
	}

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		font-size: 28px;
	}
`

const Slogan = styled.h2`
	font-weight: 400;
	margin: 0;
	font-size: 24px;

	@media screen and (max-width: ${screenSizes.laptop.max}) {
		font-size: 18px;
	}
`

const Logo = styled.img`
	margin-left: 10px;
	height: 100px;

	@media screen and (max-width: ${screenSizes.laptop.max}) {
		height: 70px;
	}

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		display: none;
	}
`

const Header = ({ title, secondaryTitle, logo }) => (
	<Wrapper>
		<SkewBackground>
			<Straightener>
				<TextWrapper>
					<Title>{title}</Title>
					{secondaryTitle ? <Slogan>{secondaryTitle}</Slogan> : null}
				</TextWrapper>
				{logo ? <Logo src={logo} /> : null}
			</Straightener>
		</SkewBackground>
	</Wrapper>
)

export default Header
