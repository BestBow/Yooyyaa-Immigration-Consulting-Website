import { Link } from "react-router";

import "tailwindcss";
import '../styles/global.css';
//import '../styles/Services.module.css'

import BANNER_PHOTO from '../assets/service-banner.jpg';

function Service_Anchors ()
{
	let serviceFiles = import.meta.glob( '../assets/service-descriptions/*.json', { eager: true } )
	
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
	let serviceFiles = import.meta.glob( '../assets/service-descriptions/*.json', { eager: true } )
	
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

function HeadingBanner ()
{
	return (
		<div className="w-full relative flex flex-col items-center">
			<div className="w-screen absolute left-1/2 transform -translate-x-1/2">
				<img
					src={ BANNER_PHOTO }
					alt="Banner"
					className="w-full h-[400px] object-cover"
				/>

				<div className="
                    absolute inset-0
                    bg-gradient-to-t 
                    from-[#FFFFFF] from-0%
                    to-[#003580]/25 to-80%
                ">
					<h1 className='banner-title absolute inset-x-0 top-1/3 text-center'>
						SERVICES<br /> OFFERED
					</h1>
				</div>
			</div>
			{/* Add spacer to maintain layout flow */ }
			<div className="h-[500px]"></div>
		</div>
	);
}

export default function Page ()
{
	return (
		<>			
			<div className="container mx-auto flex flex-col">
				
				{/* Heading banner */}
				<HeadingBanner />
			
				
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
