import loadingLogo from '../assets/portfolio-logo.gif';

function Loading() {
	return (
		<div className='loader'>
			<img src={loadingLogo} alt="Loading..." />
		</div>
	)
}

export default Loading