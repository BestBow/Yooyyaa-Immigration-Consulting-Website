import BANNER_PHOTO from '../assets/service-banner.jpg';
import HeadingBanner from '../Components/headingBanner.tsx';

import "tailwindcss";
import '../styles/global.css';

const serviceFiles = import.meta.glob( '../assets/service-descriptions/*.json', { eager: true } )


function Service_Anchors ()
{	
	return Object.entries( serviceFiles ).map(
		( [ _, service ], index ) => {
			return (
				<a
					key={index}
					href={ `#${ service.title }` }
					className="text-lg"
				>
					&ensp;{ service.title }&ensp;|
				</a>
			)
		}
	)
}

function Services ()
{	
	return Object.entries( serviceFiles ).map(
		( [ _, service ] ) => {
			return (
				<section id={ service.title } className="grid grid-cols-2 gap-6 mb-10">
					
					{/* Left column: Image with overlaid title */}
					<div className="relative mr-5">
						<img 
							src={service.image.src} 
							alt={service.image.alt} 
							className="w-full h-full object-cover rounded-xl"
						/>
						<div className="bg-gradient-to-t from-[#003580] from-0% to-transparent to-95%
						absolute left-0 bottom-7 right-0 p-4
						transform translate-y-1/2 z-10;
						rounded-b-xl">
							<h2 className="text-2xl font-bold text-center text-white">
								{ service.title }
							</h2>
						</div>
					</div>

					{/* Right column: Description */ }
					<div className="flex items-top ml-5">
						<p className="text-lg">{ service.description }</p>
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
				{/* 
					TODO: Services here must be anchor links and 
					should scroll to the respective service page
				*/}
					<div className="text-center"><Service_Anchors /></div>
					<div className="service-container my-8"> 
						<Services />
					</div>
				</div>
				
			</div>
		</>
	)
}
