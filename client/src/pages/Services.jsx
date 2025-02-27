import '../styles/Services.module.css'

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
				<h1 className='page-heading'>SERVICES<br/> OFFERED</h1>
				
				<h2>SERVICES</h2>
				
				{/* TODO: Horizontal line */ }
				
				{/* 
					TODO: Services here must be anchor links and 
					should scroll to the respective service page
				*/ }
				<p>Service 1 | Service 2 | Service 3 | Service 4</p>
				
				{ /* Services */ }
				<Services />
				
				{ /* TODO: Footer */ }
				
			</>
  	)
}
