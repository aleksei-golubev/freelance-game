import { PlayerType } from "./player-type";
import { Skill } from "./skill";

export class Player {
  constructor(type: PlayerType,
              name: string,
              experience?: number,
              capacity?: number,
              money?: number,
              reputation?: number,
              skills?: Skill[]) {
    this.type = type;
    this.name = name;

    this.experience = experience ? experience : 0;
    this.capacity = capacity ? capacity : 3
    this.money = money ? money : 0;
    this.reputation = reputation ? reputation : 0;
    this.skills = skills ? skills : [];
  }

  type: PlayerType;
  name: string;
  
  experience: number;
  capacity: number;
  money: number;
  reputation: number;
  skills: Skill[];
}