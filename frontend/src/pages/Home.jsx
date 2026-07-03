import React from 'react'
import home from "../assets/h1.png"
import Nav from '../components/Nav'
import { SiViaplay } from "react-icons/si";
import Logos from '../components/Logos';
import Cardspage from '../components/Cardspage';
import ExploreCourses from '../components/ExploreCourses';
import About from '../components/About';
import ai from '../assets/ai.png'
import ai1 from '../assets/SearchAi.png'
import ReviewPage from '../components/ReviewPage';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
function Home() {
      const navigate = useNavigate()

  return (

    
    
    <div className='w-[100%] overflow-hidden'>
      
      <div className='w-[100%] lg:h-[120vh] h-[70vh] relative'>
        <Nav/>
        <img src={home} className='w-full max-w-[1000px] h-auto object-contain ml-auto overflow-hidden' alt="" />
        <span className='lg:text-[70px] absolute  md:text-[40px]  lg:top-[22%] top-[15%] w-[100%] flex items-center  text-gray font-bold text-[20px] pl-10'>
          Grow Your Skills to Advance 
        </span>
        <span className='lg:text-[70px] text-[20px] md:text-[40px] absolute lg:top-[30%] top-[20%] w-[100%] flex  text-gray-500 font-bold pl-20'>
          Your Career path
        </span>
        <div className='absolute lg:top-[50%] top-[75%]  md:top-[80%] w-[100%] flex  justify-start gap-3 flex-wrap pl-10'>
          
      <button className='px-[20px] py-[10px] mt-15 shadow-lg hover:shadow-gray-400 border-2 lg:border-black border-black lg:text-black text-black rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer pl-10' onClick={()=>navigate("/allcourses")}>View all Courses <SiViaplay className='w-[30px] h-[30px] lg:fill-black fill-black' /></button>
      <button className='px-[20px] py-[10px] mt-15 hover:bg-gray-300 border-2 lg:border-black border-black lg:bg-gray-200 bg-black lg:text-black  text-white rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer items-center justify-center' onClick={()=>navigate("/searchwithai")}>Search with AI <img src={ai} className='w-[30px] h-[30px] rounded-full hidden lg:block' alt="" /><img src={ai1} className='w-[35px] h-[35px] rounded-full lg:hidden' alt="" /></button>
      </div>
      </div>
      <Logos/>
      <ExploreCourses/>
      <Cardspage/>
      <About/>
      <ReviewPage/>
      <Footer/>

      
      
      
    </div>

  ) 
}

export default Home
