import BANNER_PHOTO from '../assets/service-banner.jpg';
import HeadingBanner from '../Components/headingBanner.tsx';
import { useState, useEffect } from 'react';

import "tailwindcss";
import '../styles/global.css';

const serviceFiles = import.meta.glob( '../assets/service-descriptions/*.json', { eager: true } );
const MOBILE_BREAKPOINT = 768;

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
		( [service ], index ) => 
		{
			const isLastItem = index === Object.entries(serviceFiles).length - 1;
			return (
				<a
					key={ index }
					href={ `#${ service.title }` }
					className="text-lg"
				>
					{ service.title }{ !isLastItem && <>&ensp;|&ensp;</> }
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
		( [service ], index ) =>
		{
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
								<h2 className="text-2xl font-bold text-center text-white">
									{ service.title }
								</h2>
							</div>
						</div>

						{/* Description dropdown - Mobile */ }
						<div
							id={ `dropdown-${ service.title.replace( /\s+/g, '-' ) }` }
							className="mt-8 p-4 border border-[#003580] rounded-xl hidden transition-all duration-300"
						>
							<p className="text-lg">{ service.description }</p>
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
			<div className="container mx-auto flex flex-col">

				{/* Heading banner */ }
				{ HeadingBanner( "SERVICES<br/>OFFERED", BANNER_PHOTO ) }


				{/* Horizontal line */ }
				<h2 className="section-title text-center m-2">SERVICES</h2>

				<span className="horizontal-line m-5"></span>

				<div className="max-w-[90%] mx-auto">

					{/* Only show service anchors on desktop */ }
					{ !isMobile && <div className="text-center"><ServiceAnchorLinks /></div> }

					{/* Services list */ }
					<div className="service-container my-8">
						<Services />
					</div>
				</div>

			</div>
		</>
	);
}
