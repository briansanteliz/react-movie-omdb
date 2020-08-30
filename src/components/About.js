import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../helper";
import Spinner from './Spinner'
import ButtonHome from './ButtonHome'
import AboutDetails from './AboutDetails'

const About = () => {
  const { id } = useParams();
  const [about, setAbout] = useState({});
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const init = async () => {
      setLoad(true);
      const res = await fetchApi(id);
      setAbout(res);
      setLoad(false);
    };
    init();
  }, [id]);
  const { imdbRating }  = about
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="container">
              <div className="text-center ">
              {load && <Spinner/>}
              </div>
          </div>
         <AboutDetails 
          about={about}
         />
          {imdbRating && <ButtonHome/>}
        </div>
      </div>
    </>
  );
};
/* Agregar prototypes */
export default About;
