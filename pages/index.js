import styled from 'styled-components'
import Container from '../components/styles/Container'
import Header from '../components/styles/Header'

const Content = styled.main`
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.secondary};

	h2 {
		text-align: center;
	}

	p {
		font-size: 15px;
		line-height: 1.5;
	}
`

export default () => (
	<>
		<Header
			title="THS Mental Health Week"
			secondaryTitle="You gotta nourish to flourish"
		/>
		<Content>
			<Container>
				<h2>What is Mental Health Week?</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Aliquam dictum, diam sed viverra scelerisque, nisl nisi
					pharetra neque, id congue lacus mauris non urna. Ut rhoncus
					mauris vel est condimentum ultricies. Morbi eu pellentesque
					leo. In ultrices nunc nisi, a pharetra nisl consectetur a.
					Cras at neque arcu. Aliquam efficitur suscipit tristique.
					Quisque euismod fringilla sagittis. Integer dictum facilisis
					volutpat. Ut in enim eget elit sollicitudin interdum id quis
					magna.
				</p>
				<p>
					Morbi ut nisi sagittis, suscipit quam et, fermentum est.
					Mauris consequat semper enim sed commodo. Duis fermentum non
					leo semper viverra. Cras id eleifend nisl. Mauris id sem at
					ligula convallis maximus. Nam accumsan suscipit nunc et
					blandit. Proin tincidunt ac nulla vel finibus. Vestibulum at
					erat quis risus varius rhoncus vitae at urna. Duis tristique
					hendrerit justo eu lacinia. Nullam non faucibus sapien, sed
					tincidunt mauris.
				</p>
			</Container>
		</Content>
	</>
)
