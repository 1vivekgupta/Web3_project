export const idlFactory = ({ IDL }) => {
  const Job = IDL.Record({
    'title' : IDL.Text,
    'comp' : IDL.Text,
    'desc' : IDL.Text,
    'skills' : IDL.Text,
    'location' : IDL.Text,
  });
  return IDL.Service({
    'createJob' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        ['oneway'],
      ),
    'readJobs' : IDL.Func([], [IDL.Vec(Job)], ['query']),
    'removeJob' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
