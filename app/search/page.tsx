import ChooseBreedComponent from "@/components/ChooseBreedComponent";
import { poppins } from "@/app/ui/fonts";

export default function Page() {
  return (
    <main className="mt-32">
      <div className="text-white text-center text-2xl md:text-4xl mb-5 font-bold">
        <h3
          className={`${poppins.className} text-white text-center text-2xl md:text-4xl mb-5`}
        >
          Pick your dog
        </h3>
      </div>
      <div className="mt-6">
        <ChooseBreedComponent />
      </div>
    </main>
  );
}
