const Icon = ({
	color = 'currentColor',
	viewBox = '0 0 32 32',
	title,
	size,
	children
}) => (
	<svg width={size} height={size} viewBox={viewBox}>
		<title>{title}</title>
		{children}
		<style jsx>{`
			svg {
				vertical-align: middle;
				fill: ${color};
			}
		`}</style>
	</svg>
)

export default Icon
