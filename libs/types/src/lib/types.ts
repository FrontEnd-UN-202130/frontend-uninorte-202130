export interface UiProps {
  title: string;
  showTitle?: boolean;
}

export interface Country {
  name: string;
  code: string | null;
  flag: string | null;
}

export interface Team {
  name: string;
  id: number;
  logo: string | null;
}

export interface TeamsProps {
  country: string;
}

export interface Player {
  id: number
  name: string;
  age: number;
  number: number | null;
  position: string;
  photo: string;
}


export interface PlayerResponse {
  team: Team,
  players: Array<Player>;
}