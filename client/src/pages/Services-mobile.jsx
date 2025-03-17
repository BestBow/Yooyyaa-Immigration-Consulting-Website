import BANNER_PHOTO from '../assets/service-banner.jpg';
import HeadingBanner from '../Components/headingBanner.tsx';

import "tailwindcss";
import '../styles/global.css';

const serviceFiles = import.meta.glob( '../assets/service-descriptions/*.json', { eager: true } )

function Services ()
{	
	return Object.entries( serviceFiles ).map(
		( [ _, service ] ) => {
			return (
				<section id={ service.title } className="mb-10">
					
					{/* Dropdown button: Image with overlaid title */}
					<div 
						className="relative cursor-pointer"
						onClick={() => {
							const dropdown =
								document.getElementById(
									`dropdown-${ service.title.replace( /\s+/g, '-' ) }`
								);
							
							if (dropdown) {
								dropdown.classList.toggle('hidden');
							}
							
						} }
					>	
						
						<img 
							src={service.image.src} 
							alt={service.image.alt} 
							className="w-full object-cover rounded-xl"
						/>
						<div className="bg-gradient-to-t from-[#003580] from-0% to-transparent to-95%
						absolute left-0 bottom-7 right-0 p-4
						transform translate-y-1/2 z-10
						rounded-b-xl">
							<h2 className="text-2xl font-bold text-center text-white">
								{service.title}
							</h2>
						</div>
					</div>
					
					{/* Description dropdown - hidden by default */}
					<div 
						id={`dropdown-${service.title.replace(/\s+/g, '-')}`} 
						className="mt-8 p-4 border border-[#003580] rounded-xl hidden transition-all duration-300"
					>
						<p className="text-lg">{service.description}</p>
					</div>
				</section>
			)
			
		}
	)

}


export default function Page ()
{
	return (
		<>			
			<div className="container mx-auto flex flex-col">
				
				{/* Heading banner */}
				{ HeadingBanner( "SERVICES<br/>OFFERED", BANNER_PHOTO ) }
			
				
				{/* Horizontal line */}
				<h2 className="section-title text-center m-2">SERVICES</h2>
				
				<span className="horizontal-line m-5"></span>
				
				<div className="max-w-[90%] mx-auto"> 
					
				{/* Services list */}
					<div className="service-container my-8"> 
						<Services />
					</div>
				</div>
				
			</div>
		</>
	)
}
