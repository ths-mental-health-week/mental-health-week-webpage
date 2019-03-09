import styled from 'styled-components'

const TextImageRow = styled.div`
	width: 100;
	display: grid;
	grid-gap: 100px;
	grid-template-columns: 1fr 1fr;
	justify-content: center;
	align-items: center;
	margin-bottom: 100px;
`

const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	justify-content: ${({ inverse }) => (inverse ? 'start' : 'end')};
`

const IconImage = styled.img`
	flex: 1;
	max-width: 200px;
	max-height: 200px;
`

const TextWrapper = styled.div`
	${({ inverse }) => (inverse ? 'padding-left' : 'padding-right')}: 50px;
	${({ inverse }) => (inverse ? 'text-align: right;' : 'text-alignt: left;')}
`

const Title = styled.h2``

export default ({ imgSrc, imgAlt, title, inverse, children }) => (
	<TextImageRow>
		{inverse ? (
			<>
				<TextWrapper inverse={inverse}>
					<Title>{title}</Title>
					{children}
				</TextWrapper>
				<ImageWrapper inverse={inverse}>
					<IconImage src={imgSrc} alt={imgAlt} />
				</ImageWrapper>
			</>
		) : (
			<>
				<ImageWrapper inverse={inverse}>
					<IconImage src={imgSrc} alt={imgAlt} />
				</ImageWrapper>
				<TextWrapper inverse={inverse}>
					<Title>{title}</Title>
					{children}
				</TextWrapper>
			</>
		)}
	</TextImageRow>
)
