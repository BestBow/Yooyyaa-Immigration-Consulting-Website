import React from "react";

export default function HeadingBanner(title: string | TrustedHTML, bannerPhoto: string | null) {
  return (
    <div className="w-full relative flex flex-col items-center mb-8">
      <div className="w-screen absolute left-1/2 transform -translate-x-1/2">
        <img
          src={bannerPhoto != null ? bannerPhoto : "../assets/service-banner.jpg"}
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
              banner-title 
              absolute inset-x-0 top-1/3 
              text-center 
              text-5xl md:text-6xl 
              font-extrabold 
              uppercase 
              text-yellow-400
            "
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)" }}
            dangerouslySetInnerHTML={{ __html: title ? title : "PAGE<br/>TITLE" }}
          />
        </div>
      </div>

      {/* Spacer to push subsequent content below the banner */}
      <div className="h-[350px]" />
    </div>
  );
}
