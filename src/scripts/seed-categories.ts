import { db } from "@/db";
import { categories } from "@/db/schema";

//todo :  create a script to seed categories
const categoryNames = [
  "cars and vehicles",
  "Comedy",
  "Education",
  "Entertainment",
  "Film and Animation",
  "Gaming",
  "How-to and Style",
  "Music",
  "News and Politics",
  "Non-profits and Activism",
  "People and Blogs",
  "Pets and Animals",
  "Science and Technology",
  "Sports",
  "Travel and Events",
];
async function main() {
  console.log("Seeding categories");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `videos  relate4d to ${name.toLocaleLowerCase()}`,
    }));
    await db.insert(categories).values(values);
    console.log("Categories seeded successfully");
  } catch (error) {
    console.log("Error while seeding categories", error);
    process.exit(1);
  }
}
main();
