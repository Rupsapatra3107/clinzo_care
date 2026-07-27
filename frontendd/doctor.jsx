import Navbar from "../components/Navbar";

export default function Doctor(){

return(

<>

<Navbar/>

<div className="max-w-5xl mx-auto py-12">

<h1 className="text-4xl font-bold">
Manage Schedule
</h1>

<div className="mt-8 border rounded-xl p-6">

<input
className="border p-3 rounded w-full mb-4"
placeholder="Doctor Name"
/>

<input
type="datetime-local"
className="border p-3 rounded w-full mb-4"
/>

<input
type="datetime-local"
className="border p-3 rounded w-full mb-4"
/>

<button
className="bg-green-600 text-white px-6 py-3 rounded"
>
Publish Availability
</button>

</div>

</div>

</>

)

}
