import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SlotCard from "../components/SlotCard";
import api from "../api";

export default function Home() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    fetchSlots();
  }, []);

  const fetchSlots = async () => {
    const res = await api.get("/appointments");
    setSlots(res.data);
  };

  return (
    <>
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">

        {slots.map((slot) => (
          <SlotCard
            key={slot._id}
            slot={slot}
          />
        ))}

      </div>
    </>
  );
}
