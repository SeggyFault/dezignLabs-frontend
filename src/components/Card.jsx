import Button from "./Button"

export default function Card({ title, description, image, video, buttonText, onClick }) {
  const videoId = video ? video.split("v=")[1]?.split("&")[0] : null;
  return (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full">
        {/* Video or Image */}
        {videoId ? (
          <div className="relative w-full pb-[56.25%]">
            <iframe 
            className="absolute top-0 left-0 w-full h-full"
            width="600"
            height="400"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            loading="lazy"
            ></iframe>
          </div>
        ) : image ? (
          <img className="w-full h-64 object-cover" src={image} alt={title} />
        ) : (
          // Error message if no video
        <p className="text-red-500">The video is not displayed.</p>
        )
      }
        <div className="p-4 bg-surface-default flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-700">{description}</p>
          {buttonText && (
          <Button 
            onClick={onClick}
            variant="cta" 
            className="mx-auto ml-0"
          >{buttonText}</Button>
        )}
        </div>
      </div>
    </div>
  )
}