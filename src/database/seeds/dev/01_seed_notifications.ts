import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("notifications").del();

  // Inserts seed entries
  const flightNotifications = [
    {
      title: "Flight Update",
      body: "Rajawali Airline flight ABC123 from Makassar to Semarang has been delayed.",
      image:
        "https://res.cloudinary.com/dwy823csd/image/upload/v1706632737/delay_sk4zjl.png"
    },
    {
      title: "Boarding Reminder",
      body: "Boarding for your flight XYZ456 from Denpasar to Surabaya will begin shortly.",
      image:
        "https://res.cloudinary.com/dwy823csd/image/upload/v1706635172/arrival-information_jdycka.png"
    },
    {
      title: "Arrival Information",
      body: "Flight Garuda Indoneisa from Palangkaraya to Bali has landed. Welcome to your destination!",
      image:
        "https://res.cloudinary.com/dwy823csd/image/upload/v1706635175/boarding_zszyvj.png"
    },
    {
      title: "Weather Advisory",
      body: "Weather advisory for your upcoming flight GHI987 from Denver to Houston. Please check for updates.",
      image:
        "https://res.cloudinary.com/dwy823csd/image/upload/v1706635174/weather_cskei2.png"
    }
  ];
  await knex("notifications").insert(flightNotifications);
}
