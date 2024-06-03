import { FaClock, FaStar } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
    const { id } = useParams();
    const [serie,setSerie ] = useState({});

    const [movie, setMovie] = useState({});


  

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(data => {setSerie(data)})
        .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(data => {setMovie(data)})
        .catch(err => console.error(err));

 
    }, []);
    
    const url = `https://image.tmdb.org/t/p/w1280/${serie.backdrop_path || movie.backdrop_path}`;
    return ( 

        
        <div className='h-screen text-white'>

            <div className="relative max-w-xl mx-auto mt-5"></div>
            <div className='text-center items-center mb-5 flex gap-5 flex-col justify-center w-full h-2/3 bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url('${url}')`}}>
            
        
            <div className="absolute inset-0 bg-black opacity-60 rounded-md top-28 bottom-56"></div>
                <div className="absolute inset-0flex items-center justify-center flex-col gap-3">
                    <h4 className="text-xl mt-5">{serie.first_air_date || movie.release_date}</h4>
                    <h1 className='text-7xl'>{serie.title || movie.title }</h1>
                    <h2 className='text-4xl mt-10'>{serie.tagline || movie.original_language}</h2>
                    <div className="flex items-center">

                    <div className="flex m-auto items-center">
                        <h4 className="mr-2 mt-5"><FaStar /> </h4>
                        <h4 className='text-xl mt-5'>{serie.vote_average} votos</h4>
                        
                        
                    </div>

                        
                
                </div>
                
                    
            
            </div>


            
            
           
        </div>

        <div className="bg-white">

            <div className=" ml-40 mr-40 mt-8 h-3/6">

                <div className="w-2/4">
                    <h1 className="text-black p-4 text-6xl" >Sinopse</h1>

                     { serie.overview || movie.overview !== "" ? 
                     <p className='text-black p-4 text-xl'>{serie.overview || movie.overview }</p>
                    :
                    <p className="text-black p-4 text-xl">Não há sinopse.</p>
                    }

                    
                </div>

                <div>

                    <h1 className="text-black p-4 text-6xl" >Total de Votos</h1>
                    <p className='text-black p-4 text-xl'> O total de votos em '{serie.name || movie.title}' foi de <b>{serie.vote_count || movie.vote_count }</b> , e a nota total é de <b>{serie.vote_average || movie.vote_average}</b></p>

                </div>
             
            </div>
                
            
        </div>
        
        
        </div>
    );
}

export default Movie;