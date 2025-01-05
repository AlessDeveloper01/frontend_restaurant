import { Link } from 'react-router-dom'

//image
import logo from '@/assets/images/logo.png'

const LogoBox = () => {
	return (
		<>
			<Link to="/" className="logo-box">
					<img src={logo} className="logo-lg h-[40px] w-2/3" alt="Light logo" />
			</Link>
		</>
	)
}

export default LogoBox
