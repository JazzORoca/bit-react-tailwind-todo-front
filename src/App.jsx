import Crosssicon from './components/icons/Crossicon';
import MoonIcon from './components/icons/Moon';


const App = () => {
  return ( 
<div className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
bg-no-repeat bg-contain bg-gray-300 min-h-screen">

<header className="container mx-auto px-4 pt-8  ">
<div className="flex justify-between">
<h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
TODO</h1>
<button>
<MoonIcon></MoonIcon>

</button>
</div>

<form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4">
<span className="rounded-full border-2 w-5 h-5 inline-block "></span>
<input className="w-full text-gray-400 outline-none" 
type="text" placeholder="Create a new todo...">

</input>



</form>




</header>


<main className="container mx-auto px-4 mt-8">
<div className="bg-white rounded-md ">

<article className='flex gap-4 py-4 border-b-[1px] px-4'>
<button  className="rounded-full border-2 w-5 h-5 inline-block flex-none ">

</button>

<p className="text-gray-600 grow">Complete online js curse</p>
<button className='rounded-full border-b-2  w-5 h-5 inline-block flex-none'>

<Crosssicon/>
</button>
</article>

<article className='flex gap-4 py-4 border-b-[1px] px-4'>
<button  className="rounded-full border-2 w-5 h-5 inline-block flex-none ">

</button>

<p className="text-gray-600 grow">Complete online js curse</p>
<button>

<Crosssicon/>
</button>
</article>
<article className='flex gap-4 py-4 border-b-[1px] px-4'>
<button  className="rounded-full border-2 w-5 h-5 inline-block flex-none ">

</button>

<p className="text-gray-600 grow">Complete online js curse</p>
<button>

<Crosssicon/>
</button>
</article>

<section className='px-4 container mx-auto flex justify-between py-4'>
<span className='text-gray-400'>5 items left</span>
<button className='text-gray-400'>Clear completed</button>
</section>

</div>

</main>
<section className="container mx-auto px-4 mt-8">

<div className='bg-white p-4 rounded-md flex justify-center gap-4'>
<button className='hover:text-blue-600'>All</button>
<button className='hover:text-blue-600'>Active</button>
<button className='hover:text-blue-600'>completed</button>
</div>

</section>
<section className="text-center mt-8">Drag and drop to reorder List</section>
</div>



   





   );
}
 
export default App;