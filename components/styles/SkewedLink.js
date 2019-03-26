import styled from 'styled-components'
import Link from 'next/link'

const SkewedLink = styled.a`
	display: inline-block;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.secondary};
	border: 3px solid ${({ theme }) => theme.colors.primary};
	font-size: 16px;
	font-family: ${({ theme }) => theme.fonts.text};
	padding: 4px 15px;
	transform: skew(-20deg);
	text-decoration: none;
	transition: 0.2s all;
	margin-left: ${({ marginLeft }) => (marginLeft ? '9px;' : '0')};
	margin-right: ${({ marginRight }) => (marginRight ? '9px;' : '0')};

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
	}
`

const Straightener = styled.span`
	display: inline-block;
	transform: skew(20deg);
	-webkit-font-smoothing: antialiased;
`

export default ({ children, href, marginLeft, marginRight }) => (
	<Link prefetch passHref href={href}>
		<SkewedLink marginLeft={marginLeft} marginRight={marginRight}>
			<Straightener>{children}</Straightener>
		</SkewedLink>
	</Link>
)
