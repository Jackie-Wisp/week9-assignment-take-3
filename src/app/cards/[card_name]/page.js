import { db } from "@/utils/dbConnection";
import CardsPage from "../page";
import { notFound } from "next/navigation";


export default async function CardPage({ params }) {
  const { card_name } = await params;


  const card = await db.query(`SELECT * FROM heros WHERE card_name = $1`, [decodeURIComponent(card_name)]);
  // ^ decodeURIComponent apparently ensures spaces and sopecial characters in the URL

const wrangledCard = card.rows; 

if (wrangledCard.length === 0) {
  notFound();
}
    return (
      <>
      { wrangledCard.map((oneCard) =>(
          <div key={oneCard.id}>
      
      <h1>Card Name: {oneCard.card_name}</h1>
      <p>Level: {oneCard.level}</p>
      <p>Description: {oneCard.description}</p>
      </div>
       ))}

      </>
    )
  }