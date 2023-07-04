import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import {exercisesOptions, fetchData } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const fetchExercisesData = async () =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/channel/about';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exercisesOptions);
      setExerciseDetail(exerciseDetailData);
    }

    fetchExercisesData();
  }, [id]);
  

  return (
    <Box>
      <Detail  exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail