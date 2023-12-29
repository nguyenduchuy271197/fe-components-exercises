export default function HomePage() {
  return (
    <main className="p-8 space-y-8">
      <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 max-w-5xl">
        <img
          alt="Trainer"
          src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="h-32 w-full object-cover md:h-full"
        />
        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Run with the pack
          </p>
          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
              Get 20% off
            </span>
            <span className="mt-2 block text-sm">
              On your next order over $50
            </span>
          </h2>
          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href=""
          >
            Get Discount
          </a>
          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until 24th March, 2021 *
          </p>
        </div>
      </section>
      <div
        className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8 max-w-lg"
        role="alert"
      >
        <div className="flex items-center gap-4">
          <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                fillRule="evenodd"
              />
            </svg>
          </span>
          <p className="font-medium sm:text-lg">New message!</p>
        </div>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo
          unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
        </p>
        <div className="mt-6 sm:flex sm:gap-4">
          <a
            className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
            href=""
          >
            Take a Look
          </a>
          <a
            className="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto"
            href=""
          >
            Mark as Read
          </a>
        </div>
      </div>
      <section className="rounded-3xl shadow-2xl max-w-xl">
        <div className="p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
            Your order is on the way
          </p>
          <h2 className="mt-6 text-3xl font-bold">
            Thanks for your purchase, were getting it ready!
          </h2>
          <a
            className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
            href=""
          >
            Track Order
          </a>
        </div>
      </section>
      <div className="relative rounded-lg border border-gray-200 shadow-lg max-w-xl">
        <button className="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1">
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex items-center gap-4 p-4">
          <img
            alt="Women"
            src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div>
            <p className="font-medium text-gray-900">Carol Daines</p>
            <p className="line-clamp-1 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              laborum?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
