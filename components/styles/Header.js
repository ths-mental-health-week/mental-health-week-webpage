import styled from 'styled-components'
import screenSizes from '../../utils/screen-sizes'

const Wrapper = styled.header`
	text-align: center;
	width: 100vw;
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
	padding: 10px 20px;
	transform: skew(-20deg);
	background-color: #fff;
`

const SkewChildren = styled.div`
	transform: skew(20deg);
`

const Title = styled.h1`
	margin: 0;
	transition: 0.3s font-size;

	@media screen and (min-width: ${screenSizes.desktop.min}) {
		font-size: 45px;
	}
`

const Slogan = styled.h2`
	font-weight: 400;
	margin: 0;
`

const Header = ({ title, secondaryTitle }) => (
	<Wrapper>
		<SkewBackground>
			<SkewChildren>
				<Title>{title}</Title>
				{secondaryTitle ? <Slogan>{secondaryTitle}</Slogan> : null}
			</SkewChildren>
		</SkewBackground>
	</Wrapper>
)

export default Header
