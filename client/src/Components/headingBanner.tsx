import React from "react";
const DEFAULT_BANNER_PHOTO = 'https://4kwallpapers.com/images/walls/thumbs_3t/3939.jpg';

export default function HeadingBanner ( title: string | TrustedHTML, bannerPhoto?: string, subtitle?: string | TrustedHTML )
{
	return (
		<div className="w-full relative flex flex-col items-center">
			<div className="w-screen absolute left-1/2 transform -translate-x-1/2">
				<img
					src={bannerPhoto != null ? bannerPhoto : DEFAULT_BANNER_PHOTO }
					alt="Banner"
					className="w-full h-[400px] object-cover"
				/>

        <div
          className="
            absolute inset-0
            bg-gradient-to-t 
            from-[#FFFFFF] from-0%
            to-[#003580]/50 to-80%
          "
        >
          <h1
            className=" 
              absolute inset-x-0 top-1/3 
              text-center 
              text-[90px] 
              uppercase 
              text-yellow-400
            "
            style={{ textShadow: "3px 3px 8px rgba(0, 0, 0, 0.5)" }}
            dangerouslySetInnerHTML={{ __html: title ? title : "PAGE TITLE" }}
          />
          
          <h2
            className=" 
              absolute inset-x-0 top-1/3 
              text-center 
              text-[30px] 
              uppercase 
              text-yellow-400
            "
            style={{ textShadow: "3px 3px 8px rgba(0, 0, 0, 0.5)" }}
            dangerouslySetInnerHTML={{ __html: subtitle ? subtitle : "Dedicated to making your immigration journey smooth and successful!" }}
          />
          
        </div>
      </div>

      {/* Spacer to push subsequent content below the banner */}
      <div className="h-[350px]" />
    </div>
  );
}
