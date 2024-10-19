import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../assets/img/sample.jpg";

const Whatsapp = () => {
	const logoUrl = logo.src;
	return (
		<FloatingWhatsApp
			accountName="B & B Accounting Services Dubai"
			phoneNumber="+919747745544"
			avatar={logoUrl}
			statusMessage="Live chat now"
			chatMessage="Welcome to B&B Accouting service Dubai 🤝. How can we help?"
		/>
	);
};

export default Whatsapp;
