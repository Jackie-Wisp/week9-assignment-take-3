// give your user some navigation controls!
// remember to add metadata for the page!

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewCardPage()  {

  async function handleSubmit(formValues) {
    "use server";
    const card_name = formValues.get("card_name")
    const level = formValues.get("level")
    const description = formValues.get("description")

    db.query(`INSERT INTO heros (card_name, level, description) VALUES ($1, $2, $3)`, [card_name,level,description])

    revalidatePath("/cards");
    redirect("/cards");
  }


    return ( 
      <>
    <h1>Please submit a new card!</h1>
    <form action={handleSubmit}>
      <label htmlFor="card_name">Card Name: </label>
      <input type="text" name="card_name" id="card_name" className="text-black"/>

      <label htmlFor="level">Card Level: </label>
      <input 
      type="number" 
      name= "level" 
      id="level" 
      min={1} 
      max={12}
      className="text-black"/>

      <label htmlFor="description">Card Description </label>
      <input type="text" name= "description" id = "description"
      className="text-black"/>

      <button type="submit" className="border-blue-400 border-4 hover:bg-sky-300" >Submit your Card</button>

    </form>
    </>
    );
  }