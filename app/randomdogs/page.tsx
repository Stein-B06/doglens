import DogImages from "@/components/randomDogs";

export default function Page() {
  return (
    <main className="mt-32">
      <div className="text-white text-center text-2xl md:text-4xl font-bold">
        <h3>Find your dog</h3>
      </div>
      <div className="mt-8">
        <DogImages />
      </div>
    </main>
  );
}
