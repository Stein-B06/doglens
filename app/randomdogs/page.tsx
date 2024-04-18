import DogImages from "@/components/randomDogs";
import { poppins } from "@/app/ui/fonts";
export default function Page() {
  return (
    <main className="mt-32">
      <div className="text-white text-center text-2xl md:text-4xl font-bold">
        <h3 className={`${poppins.className}`}>Find your dog</h3>
      </div>
      <div className="mt-8">
        <DogImages />
      </div>
    </main>
  );
}
