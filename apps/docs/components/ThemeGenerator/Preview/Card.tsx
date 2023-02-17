export const Card = () => {
  return (
    <div
      className="bg-base-2 hover:bg-base-2-focus hover:cursor-pointer shadow--md flex flex-col justify-center p-4 w-64 h-fit rounded-md"
      id="card"
    >
      <div className="w-full h-full bg-base-2 border border-line rounded-md overflow-hidden">
        <img
          src="https://picsum.photos/seed/picsum/640/480"
          alt="random"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-left">
        <h1 className="text-2xl font-bold text-base-content">
          {`A random blog post title (text-base-content)`}
        </h1>
        <p className="text-base-content-2">{`Some description that you'd find for a blog post. This one is using text-base-content-2 to provide some contrast with the title.`}</p>
      </div>
    </div>
  );
};
