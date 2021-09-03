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
import image20 from "../images/riveta.png"
import image21 from "../images/bellyfat.png"
import image22 from "../images/biofit.png"
import image23 from "../images/resurge.png"
import image24 from "../images/up-main-min.png"
import image25 from "../images/full-product.png"
import image26 from "../images/Keravita.png"
import image27 from "../images/promind1.png"
import image28 from "../images/Carbofit.png"


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
			shop:[
			
				{
					id: 5,
					label:"revita",
					description:"Revitaa Pro is a stress reliever supplement that facilitates stress relief through its all-natural components",
					image:image20,
					link:"https://hop.clickbank.net/?affiliate=hjackson56&vendor=revitaapro&cbpage=intro"

				},
				{
					id: 6,
					label:"belly flat tea",
					description:"",
					image:image21,
					link:"https://hop.clickbank.net/?affiliate=hjackson56&vendor=fbtonic&tid=track"
				},
				{
					id: 7,
					label:"Biofit",
					description:"",
					image:image22,
					link:"https://59f552nxgg69tsb2plm7xhza-7.hop.clickbank.net/"
				},
				{
					id: 8,
					label:"Resurge",
					description:"",
					image: image23,
					link:"https://hop.clickbank.net/?affiliate=hjackson56&vendor=resurge&lid=3"
				},
				{
					id:9,
					label:"Synogut",
					description:"",
					image:image24,
					link:"https://d173e1w5ri0l-vena9ze-d6x77.hop.clickbank.net/",
				},
				{
					id:10,
					label:"Altai Balance",
					description:"blood and sugar ",
					image:image25,
					link:"https://3f2ca3m-jj7h0ye90lm2ebyafp.hop.clickbank.net//",
				},
				{
					id:11,
					label:"Keravita",
					description:"",
					
					image:image26 ,
					link:"https://064e93y2h4vavvlginjfjgcr9f.hop.clickbank.net/",
				},
				{
					id:12,
					label:"Promind",
					description:"Everyone Has Brain Fog, Tiredness And Fear Of Memory Issues",
					image:image27,
					link:"https://444712vzd708o3biwizb20sy1x.hop.clickbank.net/",
				},
			   
				{
					id:13,
					label:"Carbofix",
					description:"",
					image:image28,
					link:"https://2faaeer4mdzgw3g3qhj9ub3s2e.hop.clickbank.net/"
				},
				
			
				 
			
			],
			allServices:[
				{
					id:14,
					label:"Mobil App",
					description:"WBT offers secure and safe measures building mobile Apps, we have the best developers, with the most experience turn around time is fast ",
					image:image5
				},
				{
					id:15,
					label:"web development",
					description:"with many years of experience building web apps, we offer many services with languages of your choice html, css, javascript, react, python. jquery, django, and much more",
					image:image2
				},
				{
					id:16,
					label:"custom software",
					description:"whatever you think in your mind we can build contact for more info",
					image:image4
				},
				{
					id:17,
					label:"ecommerce",
					description:"Get a customize ecommerce build with checkout page ",
					image:image8
				},
				{
					id:18,
					label:"computer repair",
					description:"we fix computers quick and fast ",
					image:image1
				},
				{
					id:19,
					label:"computer installation",
					description:"specializing in computer it we offer installation for big companys",
					image:image10
				},
				{
					id:20,
					label:"password recover",
					description:"get your password recoverd at a lost cost",
					image:image11
				},
				{
					id:21,
					label:"Chat Apps",
					description:"get a chat App build at a quick turn around contact for more info",
					image:image12
				},
				
				{
					id:22,
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