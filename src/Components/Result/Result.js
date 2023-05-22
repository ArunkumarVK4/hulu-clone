import { useEffect, useState } from "react";
import axios from "../Helper/Axios";
import VideoCard from './../VideoCard/VideoCard';
import "./Result.css"
import FlipMove from "react-flip-move"


const Result = ({ selectOption }) => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const request = await axios.get(selectOption);
        setMovies(request.data.results);
        return request;
      };
      fetchData();
    }, [selectOption]);
  
    return (
      <div className="results">
        <FlipMove>
        {movies.map((movie) => (
            <VideoCard key={movie.id} movie={movie} />
          ))}
        </FlipMove>
      </div>
    );
  };


export default Result