import { useState, useEffect } from "react";
import {getRandomFact} from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const getFactAndUpdateReact = () => {
    getRandomFact().then((res) => setFact(res));
  };
  useEffect(getFactAndUpdateReact, []);

  return { fact, getFactAndUpdateReact };
};
