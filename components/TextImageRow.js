import styled from 'styled-components'
import screenSizes from '../utils/screen-sizes'

const TextImageRow = styled.div`
	width: 100;
	display: grid;
	grid-gap: 50px;
	grid-template-columns: 1fr 1fr;
	justify-content: center;
	align-items: center;
	margin-bottom: 100px;

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}

	&:last-child {
		margin-bottom: 50px;
	}
`

const ImageWrapper = styled.div``

const IconImage = styled.img`
	flex: 1;
	max-width: 200px;
	max-height: 200px;
	float: ${({ inverse }) => (inverse ? 'left' : 'right')};

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		width: 100%;
		max-width: 100%;
		float: none;
		grid-row-start: 1;
	}
`

const TextWrapper = styled.div`
	${({ inverse }) => (inverse ? 'text-align: right;' : 'text-alignt: left;')}

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		grid-row-start: 2;
		text-align: center;
	}
`

const TextBox = styled.div`
	width: 100%;
	max-width: 350px;
	float: ${({ inverse }) => (inverse ? 'right' : 'left')};

	@media screen and (max-width: ${screenSizes.smallPhone.max}) {
		max-width: 100%;
	}
`

const Title = styled.h2``

export default ({ imgSrc, imgAlt, title, inverse, children }) => (
	<TextImageRow>
		{inverse ? (
			<>
				<TextWrapper inverse={inverse}>
					<TextBox inverse={inverse}>
						<Title>{title}</Title>
						{children}
					</TextBox>
				</TextWrapper>
				<ImageWrapper inverse={inverse}>
					<IconImage src={imgSrc} alt={imgAlt} inverse={inverse} />
				</ImageWrapper>
			</>
		) : (
			<>
				<ImageWrapper inverse={inverse}>
					<IconImage src={imgSrc} alt={imgAlt} inverse={inverse} />
				</ImageWrapper>
				<TextWrapper inverse={inverse}>
					<TextBox inverse={inverse}>
						<Title>{title}</Title>
						{children}
					</TextBox>
				</TextWrapper>
			</>
		)}
	</TextImageRow>
)
