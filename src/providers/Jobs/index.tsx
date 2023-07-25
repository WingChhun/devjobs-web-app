import React, { useEffect, useReducer } from 'react';
import { createContext } from 'use-context-selector';
import getJobsData from '../../fetches/getJobsData';
import { Job } from '../../typings/Job';

export const JobsContext = createContext<any>(null);
export const JobsDispatchContext = createContext<any>(null);

export enum JobActionType {
  SET_DATA = 'SET_DATA'
}

type JobsAction = {
  type: JobActionType.SET_DATA;
  payload: {
    data: Array<Job>;
  };
};

type JobState = {
  jobs: Job[] | Array<void>;
};

function jobsReducer(state: JobState, action: JobsAction) {
  const { type, payload } = action;

  switch (type) {
    case JobActionType.SET_DATA: {
      return { ...state, jobs: payload.data };
    }

    default: {
      throw new Error('Unknown action' + action.type);
    }
  }
}

export default function JobsProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(jobsReducer, {
    jobs: []
  });

  useEffect(() => {
    async function init() {
      const { data, error } = await getJobsData();

      if (error) {
        throw new Error('Failed to get jobs data');
      }

      console.log('data:', data);

      const typedData = data as Array<Job>;

      dispatch({
        type: JobActionType.SET_DATA,
        payload: {
          data: typedData
        }
      });
    }

    init();
  }, []);

  return (
    <JobsContext.Provider value={state}>
      <JobsDispatchContext.Provider value={dispatch}>
        {children}
      </JobsDispatchContext.Provider>
    </JobsContext.Provider>
  );
}
