'use client';

import fdic from '@/resources/fdic.png';
import card3 from '@/resources/card-3.png';
import card4 from '@/resources/card-4.png';
import Image from 'next/image';
import { useEffect } from 'react';
import { analytics } from '../../firebaseConfig';
import { logEvent } from 'firebase/analytics';

export default function Home() {
    useEffect(() => {
        if (analytics) {
          // Envia evento de visualização de página para o Firebase Analytics
          logEvent(analytics, 'page_view');
        }
      }, []);
      
    const handleExplorar = () => {
        if(analytics) {
            logEvent(analytics, 'button_click', {
                label: 'Botão de Explorar',
            })
        }
    }

    const handleHeaderNav = (label:string) => {
        if(analytics) {
            logEvent(analytics, 'button_click', {
                label: `Botão de ${label}`,
            })
        }
    }

    return (<>
        <section className='m-16 flex flex-1 flex-col justify-between h-screen'>
            <Image className='absolute -top-40 left-1/4 -z-10 opacity-60 -rotate-45 w-96'src={card3} alt=""/>
            <span className='absolute w-60 h-10 bg-slate-100 rounded-full right-16 top-12'></span>
            <header className="flex itens-center mt-14">
                <h1 className="text-4xl font-extrabold">Sable.</h1>
                <nav className="font-mono flex justify-between w-96 text-xl font-medium mx-auto">
                    <span onClick={()=>handleHeaderNav("CREDIT")} className='cursor-pointer hover:text-white transition-colors'>CREDIT</span>
                    <span onClick={()=>handleHeaderNav("DEBIT")} className='cursor-pointer hover:text-white transition-colors'>DEBIT</span>
                    <span onClick={()=>handleHeaderNav("APP")} className='cursor-pointer hover:text-white transition-colors'>APP</span>
                    <span onClick={()=>handleHeaderNav("LEARN")} className='cursor-pointer hover:text-white transition-colors'>LEARN</span>
                </nav>
            </header>
            <div className="flex text-slate-50 flex-col items-center mt-20 w-1/3 text-center mx-auto">
                <h1 className="text-4xl">The fastest, most premium path to <br/>
                    <span className="font-semibold">financial freedom</span>
                </h1>
                <button onClick={handleExplorar} className="hover:bg-transparent hover:text-teal-400 transition-colors border-2 border-teal-400 font-mono px-6 text-xl py-4 bg-teal-400 text-gray-950 font-semibold mt-4 rounded-full">EXPLORE</button>
            </div>
            <div className='flex rounded-xl text-gray-400 mt-40'>
                <Image src={fdic} height={100} width={100} alt=""/>
                <p className='ml-4 w-1/4'>Banking services provided by Coastal Community Bank, Member FDIC, pursuant to license by Mastercard International Inc.</p>
                <Image className='absolute -mt-48 right-40 -z-10 opacity-60 -rotate-90 w-96'src={card4}alt=""/>
            </div>
        </section>
        {/* <section className='bg-gray-800 w-full h-96 p-16 -mt-10'>
        </section> */}
    </>);
}