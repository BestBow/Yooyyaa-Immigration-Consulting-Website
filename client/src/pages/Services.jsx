import "tailwindcss";
import '../styles/global.css';
import '../styles//Services.module.css'

function Service_Anchors ()
{
	let serviceFiles = import.meta.glob( '../assets/service-descriptions/*.json', { eager: true } )
	
	return Object.entries( serviceFiles ).map(
		( [ _, service ] ) => {
			return (
				<a href={`#${service.title}`} key={ service.title } className="text-lg">
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
				<section key={ service.title } className="grid grid-cols-2 gap-6 mb-10">
					
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
			<div className="container mx-auto flex flex-col items-center">
				
				{/* Heading banner */}
				<div className="flex flex-col items-center">
					<h1 className='text-3xl'>SERVICES<br/> OFFERED</h1>
				</div>
				
				
				{/* Horizontal line */}
				<h2 className="text-center">SERVICES</h2>
				
				<span className="horizontal-line"></span>
				
				<div className="max-w-[90%] mx-auto"> 
				{/* 
					TODO: Services here must be anchor links and 
					should scroll to the respective service page
				*/}
					<p className="text-center"><Service_Anchors /></p>
					<div className="service-container my-8"> 
						<Services />
					</div>
				</div>
				{/* TODO: Footer */}
				
			</div>
		</>
	)
}
