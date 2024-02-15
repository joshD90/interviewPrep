import { time } from "console";

export class RateLimiter {
  private numRequests: number;
  private timeSpan: number;
  private usersRequests: Map<string, number[]>;

  constructor(numRequests: number, timeSpan: number) {
    this.numRequests = numRequests;
    this.timeSpan = timeSpan;
    this.usersRequests = new Map<string, number[]>();
  }

  public checkRate(user: string) {
    const userRequestHist = this.usersRequests.get(user);
    if (!userRequestHist) return true;
    //we dont need to check time i differences because we already know from adding that we've removed anything greater than timespan
    if (userRequestHist.length <= this.numRequests) return true;

    return false;
  }

  public addUserRequest(user: string) {
    const userRequests = this.usersRequests.get(user);
    if (userRequests) {
      //we can get rid of anything older than the cutoff time at this point, i feel this is the best point to do this.
      const filteredUserRequests = userRequests.filter(
        (request) => Date.now() - request < this.timeSpan
      );
      //now we can add this in and set it
      const updatedUserRequests = [...filteredUserRequests, Date.now()];
      this.usersRequests.set(user, updatedUserRequests);
    } else {
      this.usersRequests.set(user, [Date.now()]);
    }
  }
}

//usage - effectively everytime something is called we need to add the user request first and then check rate could maybe combine in a single method and have these two as private?

const rateLimiter = new RateLimiter(10, 10);
rateLimiter.addUserRequest("user1");
rateLimiter.checkRate("user1");
