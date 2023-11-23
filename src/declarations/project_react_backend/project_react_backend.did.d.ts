import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Job {
  'title' : string,
  'comp' : string,
  'desc' : string,
  'skills' : string,
  'location' : string,
}
export interface _SERVICE {
  'createJob' : ActorMethod<
    [string, string, string, string, string],
    undefined
  >,
  'readJobs' : ActorMethod<[], Array<Job>>,
  'removeJob' : ActorMethod<[bigint], undefined>,
}
