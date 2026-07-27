import api from "../api";

export default function SlotCard({ slot }) {

  const book = async () => {

    await api.put(
      `/appointments/${slot._id}/book`,
      {
        patient: "Rupsa"
      }
    );

    window.location.reload();

  };

  return (

    <div className="border rounded-xl p-5 shadow">

      <h2 className="text-xl font-bold">
        {slot.doctor}
      </h2>

      <p>{slot.date}</p>

      <p>{slot.time}</p>

      {slot.booked ? (
        <button
          disabled
          className="bg-gray-400 text-white w-full p-2 rounded mt-4"
        >
          Booked
        </button>
      ) : (
        <button
          onClick={book}
          className="bg-green-600 text-white w-full p-2 rounded mt-4"
        >
          Book Appointment
        </button>
      )}

    </div>
  );
}
