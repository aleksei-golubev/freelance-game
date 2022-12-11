import { Job } from "./job";
import { PlayerType } from "./player-type";

export class Player {
  constructor(id: number,
              type: PlayerType,
              name: string,
              color?: string,
              job?: Job,
              experience?: number,
              capacity?: number,
              maxCapacity?: number,
              money?: number,
              reputation?: number) {
    this.id = id;
    this.type = type;
    this.name = name;

    this.job = job ? job : null;
    this.color = color ? color : '#101010';
    this.experience = experience ? experience : 0;
    this.capacity = capacity ? capacity : 0
    this.maxCapacity = maxCapacity ? maxCapacity : 3
    this.money = money ? money : 0;
    this.reputation = reputation ? reputation : 0;

    this.isActive = false;
  }

  id: number;
  type: PlayerType;
  name: string;
  
  job: Job;
  color: string;
  experience: number;
  capacity: number;
  maxCapacity: number;
  money: number;
  reputation: number;
  
  isActive: boolean;
}