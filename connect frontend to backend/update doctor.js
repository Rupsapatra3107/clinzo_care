import { useState } from "react";
import api from "../api";
import Navbar from "../components/Navbar";

export default function Doctor() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const publish = async () => {
    try {
      await api.post("/appointments", {
        doctor,
        date,
        time,
      });

      alert("Availability Published");

      setDoctor("");
      setDate("");
      setTime("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10">

        <h1 className="text-3xl font-bold mb-6">
          Doctor Dashboard
        </h1>

        <input
          className="border p-3 w-full mb-3"
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />

        <input
          type="date"
          className="border p-3 w-full mb-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          className="border p-3 w-full mb-3"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <button
          onClick={publish}
          className="bg-green-600 text-white px-5 py-3 rounded"
        >
          Publish Availability
        </button>

      </div>
    </>
  );
}
