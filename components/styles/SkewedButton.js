import styled from 'styled-components'

const Button = styled.button`
	font-family: 'Rubik', 'Roboto', sans-serif;
	font-size: 16px;
	display: block;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.secondary};
	border: 3px solid ${({ theme }) => theme.colors.primary};
	padding: 10px 20px;
	transform: skew(-20deg);
	cursor: pointer;
	transition: 0.3s all;
	float: ${props => (props['float-right'] ? 'right' : 'left')};
	${props => (props['float-right'] ? 'margin-right' : 'margin-left')}: 9px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary};
	}
`

const Straightener = styled.span`
	display: inline-block;
	transform: skew(20deg);
`

export default ({ children, ...props }) => (
	<Button {...props}>
		<Straightener>{children}</Straightener>
	</Button>
)
