import axios from 'axios';
import { BASE_URL } from '../constants';
import { Job } from '../typings/Job';

type JobsDataResponse =
  | { data: Array<Job>; error?: any }
  | { data?: Array<Job>; error: any };

export default async function getJobsData(): Promise<JobsDataResponse> {
  try {
    const { data } = await axios.get(`${BASE_URL}/jobs`);

    return { data };
  } catch (error: any) {
    console.error('Error retrieving jobs data');
    return { error };
  }
}
