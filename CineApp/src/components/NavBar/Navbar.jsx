import {NavLink} from 'react-router-dom';

export default function NavBar(){
    return(
        <>
        <nav className="text-white">
            <ul className='flex justify-between gap-3'>
                <li className='p-5'><NavLink to='/' className="hover:border-b-white font-Orbitron font-semibold text-xl"> Home</NavLink></li>
                <li className='p-5'><NavLink to='filmes' className="hover:border-b-white font-Orbitron font-semibold text-xl"> Filmes</NavLink></li>
                <li className='p-5'><NavLink to='sobre' className="hover:border-b-white font-Orbitron font-semibold text-xl"> Sobre</NavLink></li>
                <li className='p-5'><NavLink to='contato' className="hover:border-b-white font-Orbitron font-semibold text-xl"> Contato</NavLink></li>
            </ul>    
        </nav>
        </>
    )
}