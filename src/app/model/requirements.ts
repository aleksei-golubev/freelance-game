export class Requirements {
  constructor(options: {
                experience: number,
                reputation: number
              }) {
    this.experience = options.experience;
    this.reputation = options.reputation;
  }

  experience: number;
  reputation: number;
}