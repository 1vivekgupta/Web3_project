import List "mo:base/List";
import Debug "mo:base/Debug";

actor Job {

    public type Job = {
        title: Text;
        desc: Text;
        comp: Text;
        skills: Text;
        location: Text;
    };

    stable var Jobs: List.List<Job> = List.nil<Job>();

    public func createJob(titleText: Text, descText: Text,compText: Text,skillsText: Text,locationText: Text) {

        let newJob: Job = {
            title = titleText;
            desc = descText;
            comp = compText;
            skills =  skillsText;
            location = locationText;
        };

        Jobs := List.push(newJob,  Jobs);
        Debug.print(debug_show(Jobs));

    };

    public query func readJobs(): async [Job] {
        return List.toArray(Jobs);
    };

    public func removeJob(id: Nat) {
        //take drop append
        let listFront = List.take(Jobs, id);
        let listBack = List.drop(Jobs, id + 1);
        Jobs := List.append(listFront, listBack);
    
    }

}