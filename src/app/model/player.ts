import { PlayerType } from "./player-type";
import { Skill } from "./skill";

export class Player {
  constructor(id: number,
              type: PlayerType,
              name: string,
              color?: string,
              experience?: number,
              capacity?: number,
              money?: number,
              reputation?: number,
              skills?: Skill[]) {
    this.id = id;
    this.type = type;
    this.name = name;
              
    this.color = color ? color : '#101010';
    this.experience = experience ? experience : 0;
    this.capacity = capacity ? capacity : 3
    this.money = money ? money : 0;
    this.reputation = reputation ? reputation : 0;
    this.skills = skills ? skills : [];

    this.isActive = false;
  }

  id: number;
  type: PlayerType;
  name: string;
  
  color: string;
  experience: number;
  capacity: number;
  money: number;
  reputation: number;
  skills: Skill[];
  
  isActive: boolean;
}