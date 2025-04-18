import React from "react";
const DEFAULT_BANNER_PHOTO = 'https://4kwallpapers.com/images/walls/thumbs_3t/3939.jpg';

export default function HeadingBanner(title: string | TrustedHTML, subtitle?: string | TrustedHTML, bannerPhoto?: string) {
  return (
    <div className="w-full max-w-dvw relative flex flex-col items-center mb-30">
      <div className="w-screen absolute left-1/2 transform -translate-x-1/2">
        <img
          src={bannerPhoto != null ? bannerPhoto : DEFAULT_BANNER_PHOTO}
          alt="Banner"
          className="w-full h-[500px] object-cover"
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t 
            from-[#FFFFFF] from-0%
            to-[#003580]/50 to-80%
          "
        >
          <div className="flex flex-col justify-center items-center h-full">
            <h1
              className=" 
              inset-x-0
              text-center 
              heading-banner-h1
            "
              style={{ textShadow: "3px 3px 8px rgba(0, 0, 0, 0.7)" }}
              dangerouslySetInnerHTML={{ __html: title ? title : "PAGE TITLE" }}
            />

            <h2
              className=" 
              inset-x-0
              text-center 
              heading-banner-h2
            "
              style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)" }}
              dangerouslySetInnerHTML={{ __html: subtitle ? subtitle : "Dedicated to making your immigration journey smooth and successful!" }}
            />
          </div>

        </div>
      </div>

      {/* Spacer to push subsequent content below the banner */}
      <div className="h-[350px]" />
    </div>
  );
}
