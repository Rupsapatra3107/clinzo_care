import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SlotCard from "../components/SlotCard";

const slots=[
{
doctor:"Dr. John",
date:"28 July",
time:"10:00 AM"
},
{
doctor:"Dr. Sarah",
date:"28 July",
time:"11:30 AM"
}
]

export default function Home(){

return(

<>

<Navbar/>

<Hero/>

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

{
slots.map((s,i)=>(
<SlotCard
key={i}
slot={s}
/>
))
}

</div>

</>

)

}
