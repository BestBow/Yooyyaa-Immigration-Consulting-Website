import 'tailwindcss';
import '../styles/global.css';

//import '../styles//Services.module.css'

function Services ()
{
	let serviceFiles = import.meta.glob( '../assets/service-descriptions/*.json', { eager: true } )
	
	return Object.entries( serviceFiles ).map(
		( [ _, service ] ) => {
			return (
				<section key={service.title} className="service-description">
					<h3>{ service.title }</h3>
					
					<p>{ service.description }</p>
					
					<img src={ service.image.src } alt={ service.image.alt } />
					
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
				
				
				{/* Horizontal line */ }
				<h2 className="text-center">SERVICES</h2>
				
				<span className="horizontal-line"></span>
				
				<div className=""> 
				{/* 
					TODO: Services here must be anchor links and 
					should scroll to the respective service page
				*/ }
					<p className="text-center">Service 1 | Service 2 | Service 3 | Service 4</p>
					
					<div className="service-container "> 
						{ /* Services */ }
						<Services />
					</div>
				
				</div>
				{ /* TODO: Footer */ }
				
			</div>
		</>
	)
}
