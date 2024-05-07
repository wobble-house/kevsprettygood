import GalleryImage from "@/components/gallery-image";

export default function Paintings() {
  return (
    <main className="flex flex-col w-full md:max-w-6xl justify-center mx-auto p-24">
      <h2 className="text-2xl font-semibold">Paintings</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
        <GalleryImage src={'/images/img_0064.webp'} alt="image alt" width={600} height={600}/>
        <GalleryImage src={'/images/img_0064.webp'} alt="image alt" width={600} height={600}/>
        <GalleryImage src={'/images/img_0064.webp'} alt="image alt" width={600} height={600}/>
        <GalleryImage src={'/images/img_0064.webp'} alt="image alt" width={600} height={600}/>
        <GalleryImage src={'/images/img_0064.webp'} alt="image alt" width={600} height={600}/>
        <GalleryImage src={'/images/img_0064.webp'} alt="image alt" width={600} height={600}/>
        <GalleryImage src={'/images/img_0064.webp'} alt="image alt" width={600} height={600}/>
        <GalleryImage src={'/images/img_0064.webp'} alt="image alt" width={600} height={600}/>
        <GalleryImage src={'/images/img_0064.webp'} alt="image alt" width={600} height={600}/>
        <GalleryImage src={'/images/img_0064.webp'} alt="image alt" width={600} height={600}/>
      </div>
    </main>
  );
}
