import { Armor, EntityCategory } from '../game_data/entity';

export interface EntityStats {
  id: string;
  category: EntityCategory;
  reinforce: {
    manpower: number;
    time: number;
  };
  armor: Armor;
  hitpoints: number;
  targetSize: number;
  moving: {
    acceleration: number;
    deceleration: number;
    reverseAcceleration: number;
    reverseDeceleration: number;
    rotationRate: number;
    speedScalingTable: {
      defaultSpeed: number;
      maxSpeed: number;
      minSpeed: number;
      reverseMaxSpeed: number;
    };
  };
  sightRadius: number;
  detect: {
    global: number;
    mine: number;
    unit: number;
  };
}
