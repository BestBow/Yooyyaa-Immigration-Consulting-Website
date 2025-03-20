import React from "react";
import DEFAULT_BANNER_PHOTO from '../assets/images/service-banner.jpg';

export default function HeadingBanner ( title: string | TrustedHTML, bannerPhoto: string | null )
{
	return (
		<div className="w-full relative flex flex-col items-center">
			<div className="w-screen absolute left-1/2 transform -translate-x-1/2">
				<img
					src={bannerPhoto != null ? bannerPhoto : DEFAULT_BANNER_PHOTO }
					alt="Banner"
					className="w-full h-[400px] object-cover"
				/>

				<div className="
					absolute inset-0
					bg-gradient-to-t 
					from-[#FFFFFF] from-0%
					to-[#003580]/25 to-80%
				">
					<h1 className='banner-title absolute inset-x-0 top-1/3 text-center'
						dangerouslySetInnerHTML={{ __html: title? title : 'PAGE<br/>TITLE' }}
					>
					</h1>
				</div>
			</div>
			{/* Spacer to maintain layout flow */ }
			<div className="h-[350px]"></div>
		</div>
	);
}
