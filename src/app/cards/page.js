import Image from "next/image";
import { db } from "@/utils/dbConnection";
import Wakeupyourhero from "@/../public/Wakeupyourelementalhero.jpg";
import Section from "@/components/Section";
import { revalidatePath } from "next/cache";

export default async function CardsPage() {
  const cards = await db.query(`SELECT * FROM heros`);
  console.log(cards);
  const wrangledCards = cards.rows;
  console.log(wrangledCards);

  async function deleteCard(formData) {
    "use server";
    const cardId = formData.get("card_id");
    
    await db.query(`DELETE FROM heros WHERE id = $1`, [cardId]);
    revalidatePath("/cards"); 
  }

  return (
    <>
    <div className="justify-center p-6">
      <Section />
      <h1 className="text-3xl font-bold text-center text-gray-500">Cards Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/*Made an attempt at understanding grid*/}
        {wrangledCards.map((card) => (
          <div key={card.id} className="bg-gray-300 shadow-lg rounded">
            <h2 className="text-xl font-semibold text-gray-800">{card.card_name}</h2>
            <p className="text-gray-600">Level {card.level}</p>
            <p className="text-gray-700">{card.description}</p>

            <form action={deleteCard} className="mt-4">
              <input type="hidden" name="card_id" value={card.id} />
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold">
                Delete
              </button>
            </form>
          </div>
        ))};
      </div>

      <div className="p-5 flex justify-center">
        <Image 
          src={Wakeupyourhero} 
          alt="A picture of the Yugioh card Wake Up your Elemental Hero" 
          width={500} 
          height="fill"
          placeholder="blur"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
    </>
  );
}