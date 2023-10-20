import './contactCard.css'

const ContactCard = ({ username, email, age }) => {
	return (
		<div className='cardContainer' >
			<div className='imageContainer'>
				<img className='image' src="https://via.placeholder.com/250x250" alt="user" />
			</div>
			<div className='text' >
				<h3>{username}</h3>
				<h3>{email}</h3>
				<h3>{age}</h3>
			</div>
		</div>
	);
};

export default ContactCard;
