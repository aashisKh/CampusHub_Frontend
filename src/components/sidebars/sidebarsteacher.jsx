import React from 'react'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link ,NavLink,useNavigate } from 'react-router-dom';
import { Popover } from '@headlessui/react'
const Sidebarsteacher = () => {
    let nonhide;
    let hidebar;
    const[slide,setSlide]=useState(true);
    function fun(){
       setSlide(!slide) 
      
    }
    if (slide===true){
      // 004369
        nonhide= 'h-[calc(100vh-5rem)] text-gray-200  w-56  hidden   md:block border-r border-r-2';
     hidebar='text-3xl absolute text-[#004369] px-4 -right-12 md:hidden ';
       }
       else{
   

     nonhide= 'h-[calc(100vh-5rem)] text-gray-200  w-56 border-r border-r-2 border-gray-400 shadow-gray-700 shadow-sm';

     hidebar='text-3xl absolute text-[#004369]  h-[calc(100vh-4rem)]  mr-8  px-4 -right-12 md:hidden';
       }

       //.................
    
       const DASHBOARD_SIDEBAR_LINKS = [
        {
          key: 'dashboard',
          label: 'Dashboard',
          path: 'dashboard',
          icon: <Icon icon="lucide:home" />
          
        },
        {
          key: 'classes',
          label: 'Classes',
          path: 'classes',
          icon: <Icon  icon="raphael:books" />
        },
        {
          key: 'messsage',
          label: 'Message',
          path: 'messagestds',
          icon: <Icon icon="wpf:message-outline" />
          
        },
        {
          key: 'assignments',
          label: 'Assignments',
          path: 'assignments',
          icon: <Icon icon="maki:library" />
         
        },
   
       
      ]
      const navigate = useNavigate();
      const handleLogOut=()=>{
        localStorage.removeItem("Campus_Token");
        navigate("/");}
       //.................
    
  return (
    <div className='relative flex '>
    <div className= {nonhide}>
        <div className='flex  justify-center pt-[2.25rem] mt-8  w-56  '>
            <ul className=' font-bold  w-56 flex flex-col '>
            {DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
        
            
            <Popover className="relative">
     
     <>
       
       <Popover.Button className='focus:outline-none'>
       <div className='flex items-center gap-4 py-4 w-56 px-4 text-[#004369] hover:bg-[#193443fb] hover:text-white'><Icon className='text-4xl' icon="uiw:setting-o" /><span >Settings</span></div>
       </Popover.Button>
       <Popover.Panel className="absolute left-44  z-10 w-52 shadow-sm rounded-lg shadow-black bg-blue-50 -mt-20">


       <div className='  px-4 py-3 text-black text-sm'>
<div >
      
        <div className='block border-b-2  mb-4 p-2 border-gray-300 text-center text-sm font-semibold '>
       <Link to="/changeusername" >  Change Username</Link>
        </div>

        <div className='block border-b-2   mb-4 p-2 border-gray-300 text-center text-sm font-semibold '>
        <Link to="/changepassword">Change Password</Link>  
        </div>

        <div className='block border-b-2  mb-4 p-2  border-gray-300 text-center text-sm font-semibold '>
        Terms and Conditions   </div>

        <div onClick={handleLogOut} className='block   border-gray-300 text-center p-2 text-sm font-semibold '>
          Log Out
        </div>
      </div>
</div>
   
       </Popover.Panel>
      </>
 
 </Popover>
          </ul>
        </div>
        
    </div>
   
    <div className={hidebar} onClick={fun}><Icon icon="heroicons:bars-4-solid" /></div>
    



</div>
  )
}
function SidebarLink({ link }) {
	

	return (
    <NavLink className={({isActive})=>` py-4 w-56 px-4 ${isActive?"text-[#454d51] ":"text-[#004369]"} flex   items-center gap-4 hover:bg-[#193443fb] hover:text-white `}
    to={link.path}> <div className='text-4xl'>{link.icon}</div>
<div>{link.label}</div>

  </NavLink>
	)
}

export default Sidebarsteacher