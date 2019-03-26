import styled from 'styled-components'

const Divider = styled.hr`
	margin: 60px auto;
	width: calc(100% - 80px);
	border: 0;
	height: 2px;
	background-color: ${({ theme }) => theme.colors.lightGrey};
	/* background-image: linear-gradient(to right, #f38d74, #e93e3a); */
`

export default Divider
