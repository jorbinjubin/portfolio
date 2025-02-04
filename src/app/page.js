import Head from "next/head";
export default function Home() {
  return (
    <div className="bg-lGrey min-h-screen text-gold">
      <header className="text-center p-5 bg-mGrey shadow">
        <h1 className="text-3xl font-bold">Hi!</h1>
      </header>
      <main className="container mx-auto p-5">
        <section className="grid grid-cols-1  gap-4">
          <div className="bg-lGrey shadow-md rounded-lg p-3">
            <h2 className="text-xl font-semibold">
              You are probably here because I sent you this at some point, or I
              gave you the link.
            </h2>
            <p className="text-dGold">Blah Blah Blah Blah Blah</p>
            <p className="text-dGold">a</p>
            <p className="text-dGold">a</p>
            <p className="text-dGold">Blah Blah Blah Blah Blah</p>
          </div>
        </section>
      </main>
    </div>
  );
}
