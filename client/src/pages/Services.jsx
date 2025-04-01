import BANNER_PHOTO from '../assets/images/service-banner.jpg';
import HeadingBanner from '../Components/headingBanner.tsx';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import "tailwindcss";
import "../styles/global.css";
import '../styles/services.css';

const serviceFiles = import.meta.glob( '../assets/service-descriptions/*.json', { eager: true } ); // note that the file extension must end in .json, name does not matter.
const MOBILE_BREAKPOINT = 768;

const BANNER_TITLE = "SERVICES OFFERED";
const BANNER_SUBTITLE = "Explore our range of services tailored to meet your needs!";

// Track viewport width
function useWindowWidth ()
{
	const [ width, setWidth ] = useState( window.innerWidth );

	useEffect( () =>
	{
		const handleResize = () => setWidth( window.innerWidth );
		window.addEventListener( 'resize', handleResize );
		return () => window.removeEventListener( 'resize', handleResize );
	}, [] );

	return width;
}

function ServiceAnchorLinks ()
{
	return Object.entries( serviceFiles ).map(
		( [i, service ], index ) => 
		{
			console.log( i );
			return (
				<a
					key={ index }
					href={ `#${ service.title }` }
					className={`
						text-lg text-black bg-[#f8d97b4e]
						
						hover:text-black hover:bg-[#f8d87b] transition duration-300
						rounded-md mx-2 px-4 py-2 
					`}
				>
					{ service.title }
				</a>
			);
		}
	);
}

function Services ()
{
	const windowWidth = useWindowWidth();
	const isMobile = windowWidth < MOBILE_BREAKPOINT;

	return Object.entries( serviceFiles ).map(
		( [i, service ], index ) =>
		{
			console.log( i );
			if ( isMobile )
			{
				// Mobile layout with dropdown
				return (
					<section key={ index } id={ service.title } className="mb-10">

						{/* Dropdown button: Image with overlaid title */ }
						<div
							className="relative cursor-pointer"
							onClick={ () =>
							{
								const dropdown =
									document.getElementById(
										`dropdown-${ service.title.replace( /\s+/g, '-' ) }`
									);

								if ( dropdown )
								{
									dropdown.classList.toggle( 'hidden' );
								}
							} }
						>
							<img
								src={ service.image.src }
								alt={ service.image.alt }
								className="w-full object-cover rounded-xl"
							/>
							<div className="
								bg-gradient-to-t from-[#003580] from-0% to-transparent to-95%
								absolute left-0 bottom-7 right-0 p-4
								transform translate-y-1/2 z-10
								rounded-b-xl
							">
								<h2 className="service-title">
									{ service.title }
								</h2>
							</div>
						</div>

						{/* Description dropdown - Mobile */ }
						<div
							id={ `dropdown-${ service.title.replace( /\s+/g, '-' ) }` }
							className="mt-8 p-4 border border-[#003580] rounded-xl hidden transition-all duration-300"
						>
							<p className="text-lg text-left">{ service.description }</p>
						</div>
					</section>
				);
			} else
			{
				// Desktop layout with grid
				return (
					<section key={ index } id={ service.title } className="grid grid-cols-2 gap-6 mb-10">
						{/* Left column: Image with overlaid title */ }
						<div className="relative mr-5">
							<img
								src={ service.image.src }
								alt={ service.image.alt }
								className="w-full h-full object-cover rounded-xl"
							/>
							<div className="
								bg-gradient-to-t from-[#003580] from-0% to-transparent to-95%
								absolute left-0 bottom-7 right-0 p-4
								transform translate-y-1/2 z-10;
								rounded-b-xl
							">
								<h2 className="service-title ">
									{ service.title }
								</h2>
							</div>
						</div>

						{/* Right column: Description */ }
						<div className="flex items-top ml-5 text-left my-10">
							<p className="text-lg">{ service.description }</p>
						</div>
					</section>
				);
			}
		}
	);
}

export default function Page ()
{
	const windowWidth = useWindowWidth();
	const isMobile = windowWidth < 768;

	return (
		<>
			<div className="container mx-15 flex flex-col">

				{/* Heading banner */ }
				{ HeadingBanner( BANNER_TITLE, BANNER_SUBTITLE, BANNER_PHOTO ) }


				{/* Horizontal line */ }
				<h2 className="section-title text-center m-2">SERVICES</h2>

				<span className="horizontal-line m-5"></span>

				<div className="max-w-full mx-auto">

					{/* Only show service anchors on desktop */ }
					{ !isMobile && <div className="text-center"><ServiceAnchorLinks /></div> }

					{/* Services list */ }
					<div className="service-container my-8">
						<Services />
					</div>
					
					
				</div>
				
				<Link to="/contact"><button type="button" id="get-in-touch" className="transition delay-50 duration-300 ease-in-out hover:scale-110">BOOK AN APPOINTMENT</button></Link>

			</div>
		</>
	);
}
