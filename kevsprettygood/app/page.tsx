import GalleryImage from "@/components/gallery-image";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex flex-col max-w-6xl justify-center mx-auto p-4 md:p-24">
      <div className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col items-center justify-between ">
        <Image src={'/images/img_0064.webp'} alt="" width={800} height={200}/>
      </div>
      <div className="grid grid-cols-2 gap-2">
      <GalleryImage src={'/images/img_0502.webp'} alt="image alt" width={600} height={600}/>
      <GalleryImage src={'/images/img_0502.webp'} alt="image alt" width={600} height={600}/>
      <GalleryImage src={'/images/img_0502.webp'} alt="image alt" width={600} height={600}/>
      <GalleryImage src={'/images/img_0502.webp'} alt="image alt" width={600} height={600}/>
      <GalleryImage src={'/images/img_0502.webp'} alt="image alt" width={600} height={600}/>
      <GalleryImage src={'/images/img_0502.webp'} alt="image alt" width={600} height={600}/>
      <GalleryImage src={'/images/img_0502.webp'} alt="image alt" width={600} height={600}/>
      <GalleryImage src={'/images/img_0502.webp'} alt="image alt" width={600} height={600}/>
      <GalleryImage src={'/images/img_0502.webp'} alt="image alt" width={600} height={600}/>
      </div>
      </div>
    </main>
  );
}
