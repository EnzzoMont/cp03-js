import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import Movies from "../components/Movies/Movies";

export default function MovieList() {
    const [filmes, setFilmes] = useState([]);
    const [series, setSeries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [movieID, setMovieID] = useState("");

    useEffect(() => {
        setIsLoading(true);

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR&page=1')
            .then(response => response.json())
            .then(data => {
                setFilmes(data.results);
                setIsLoading(false);
            })
            .catch(err => console.error(err));

        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR&page=1')
            .then(response => response.json())
            .then(data => {
                setSeries(data.results);
                setIsLoading(false);
                console.log(data.results);
            })
            .catch(err => console.error(err));
    }, []);

    function handleClick(e) {
        console.log(e.target.parentNode.id);
        let id = e.target.parentNode.id;
        setMovieID(id);
    }

    return (
        <>
        <div className="dark:bg-[#050505]">
            <div
                style={movieID ? {backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${filmes[movieID].backdrop_path})`} : {backgroundColor: 'bg-[#2f2e2e]' }}
                className="h-[1350px] flex flex-col items-baseline justify-end hide-scroll-bar bg-no-repeat bg-cover bg-center"
            >
                <h1 className=" dark:text-white text-6xl mx-auto my-6 font-Orbitron font-bold">Filmes</h1>
                <div className="md:2xl overflow-auto">
                    <ul className="dark:text-gray-400 flex flex-wrap gap-4 justify-center md:2xl border-b-4 border-gray-500 mb-5">
                        {filmes.map(filme =>
                            <li key={filme.id} className="w-full lg:w-40 bg-[#271818] rounded-lg p-4 m-2 h-auto text-white flex flex-col items-center text-center hover:bg-slate-100 transition hover:scale-110 object-cover " id={filmes.indexOf(filme)} onClick={handleClick}>
                                <Movies filme={filme}/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="text-6xl text-center my-6 dark:text-white font-Orbitron font-semibold  mt-10 ">Séries</h1>
                <div>
                    <ul className="dark:text-gray-400 flex flex-wrap gap-4 justify-center font">
                        {series.map(serie =>
                            <li key={serie.id} className="w-full lg:w-40 bg-[#271818] rounded-lg p-4 m-2 h-auto text-white flex flex-col items-center text-center hover:bg-slate-100 transition hover:scale-110 object-cover" id={serie.id} onClick={handleClick}>
                                <Movies filme={serie}/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {isLoading ?
                <>
                    <p className="mb-2">Carregando...</p>
                    <Spinner className="h-12 w-12" />
                </>
                : null}
        </div>
        </>
        
    );
}
