import PriceCard from "./PriceCard";

export default function PriceSection() {
  const priceCardDetailsArr = [
    {
      title: "Starter",
      description: "Best option for personal use & for your next project.",
      price: "29",
      teamSize: "1 developer",
      support: "6 months",
      freeUpdates: "6 months",
    },
    {
      title: "Company",
      description: "Relevant for multiple users, extended & premium support.",
      price: "99",
      teamSize: "10 developers",
      support: "24 months",
      freeUpdates: "24 months",
    },
    {
      title: "Enterprise",
      description:
        "Best for large scale uses and extended redistribution rights.",
      price: "499",
      teamSize: "100+ developers",
      support: "36 months",
      freeUpdates: "36 months",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {priceCardDetailsArr.map((card, index) => (
            <PriceCard
              key={index}
              title={card.title}
              description={card.description}
              price={card.price}
              teamSize={card.teamSize}
              support={card.support}
              freeUpdates={card.freeUpdates}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
