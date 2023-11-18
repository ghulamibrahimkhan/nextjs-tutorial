import {Inter,Lusitana,Vina_Sans} from 'next/font/google'

export const inter = Inter({subsets: ['latin']})  

export const vinaSans = Vina_Sans({
    subsets: ['latin'],
    weight: '400'
});
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400','700']
});

