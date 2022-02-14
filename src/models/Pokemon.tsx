export default interface Pokemon{
  abilities: Generic[];
  base_experience: number;
  forms: Generic[];
  game_indices: Game[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Generic;
  sprites: Sprite;
  stats: Stat[];
  types: Type[];
  weight: number
}

interface Game{
  game_index: number;
  version: Generic[];
}

interface HeldItem{
  item: Generic;
  version_details: VerionDetails[]
}

interface VerionDetails{
  rarity: number;
  version: Generic
}

interface Move{
  move: Generic;
  version_group_details: VersionGroupDetails[]
}

interface VersionGroupDetails{
  level_learned_at: number;
  move_learn_method: Generic;
  version_group: Generic
}

interface Sprite{
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

interface Stat{
  base_stat: number;
  effort: number,
  stat: Generic
}

interface Type{
  slot: number;
  type: Generic
}

interface Generic{
  name: string;
  url: string;
}