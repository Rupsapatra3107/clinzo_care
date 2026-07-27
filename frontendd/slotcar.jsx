export default function SlotCard({slot}){

return(

<div className="border rounded-xl p-4 shadow-sm">

<h2 className="font-bold">
{slot.doctor}
</h2>

<p>{slot.date}</p>

<p>{slot.time}</p>

<button
className="mt-4 w-full bg-green-600 text-white rounded p-2"
>
Book
</button>

</div>

)

}
