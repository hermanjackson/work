import image1 from "../images/repair.jpg"
import image2 from "../images/webdesign.jpg"
import image3 from "../images/webdev.jpg"
import image4 from "../images/workimg.jpg"
import image13 from "../images/developers.jpg"
import image10 from "../images/installation.jpg"
import image8 from "../images/eccomerce.jpg"
import image5 from "../images/social.jpg"
import image12 from "../images/mobile apps.jpg"
import image11 from "../images/recover.jpg"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			services:[
			
				{
					id: 1,
					label:"computer Repair",
					description:"",
					image:image1
				},
				{
					id: 2,
					label:"Talk with a consultant",
					description:"Talk with a consultant to get ideas And prices",
					image:image2
				},
				{
					id: 3,
					label:"hire a developer",
					description:"",
					image:image3
				},
				{
					id: 4,
					label:"Chat Apps",
					description:"",
					image: image4
				},
			],
			allServices:[
				{
					id:5,
					label:"Mobil App",
					description:"WBT offers secure and safe measures building mobile Apps, we have the best developers, with the most experience turn around time is fast ",
					image:image5
				},
				{
					id:6,
					label:"web development",
					description:"with many years of experience building web apps, we offer many services with languages of your choice html, css, javascript, react, python. jquery, django, and much more",
					image:image2
				},
				{
					id:7,
					label:"custom software",
					description:"whatever you think in your mind we can build contact for more info",
					image:image4
				},
				{
					id:8,
					label:"ecommerce",
					description:"Get a customize ecommerce build with checkout page ",
					image:image8
				},
				{
					id:9,
					label:"computer repair",
					description:"we fix computers quick and fast ",
					image:image1
				},
				{
					id:10,
					label:"computer installation",
					description:"specializing in computer it we offer installation for big companys",
					image:image10
				},
				{
					id:11,
					label:"password recover",
					description:"get your password recoverd at a lost cost",
					image:image11
				},
				{
					id:12,
					label:"Chat Apps",
					description:"get a chat App build at a quick turn around contact for more info",
					image:image12
				},
				
				{
					id:13,
					label:"Hire A Developer",
					description:"Hire a experience developer for your company starting at 50 a hour",
					image:image13
				},
 
				
			],
			homeImage1: image13 ,
			homeImage2: image2,
			homeImage3: image1,
			homeImage4: image12,
			
		
			
			
		
		
		},
		actions: {
			// Use getActions to call a function within a fuction
		
		
		}
	};
};

export default getState;