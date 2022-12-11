import { Requirements } from "./requirements";

export class Job {
  constructor(options: {
                title: string,
                capacity: number,
                requirements: Requirements,
                experience: number,
                reputation: number,
                salary: number
              }) {
    this.title = options.title;
    this.capacity = options.capacity;
    this.requirements = options.requirements;
    this.experience = options.experience;
    this.reputation = options.reputation;
    this.salary = options.salary;
  }

  title: string;
  capacity: number;
  requirements: Requirements;
  experience: number;
  reputation: number;
  salary: number;
}

