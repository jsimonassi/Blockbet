import { Match } from "../../types/api/Match";

const getMatches = (champioshipId: number) => {
  return new Promise<Match[]>((resolve, reject) => {
    setTimeout(() => {
      //TODO: Replace with api call
      resolve(MatchMock);
    }, 1000);
  });
};

const getMatchById = (matchId: number) => {
  //TODO: Replace with api call
  return new Promise<Match>((resolve, reject) => {
      const match = MatchMock.find((match) => match.partida_id === matchId);
      if (match) {
        resolve(match);
      } else {
        reject("Match not found");
      }
  });
};

export const Api = {
  getMatches,
  getMatchById
};

const MatchMock = [
  {
    partida_id: 9361,
    campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
    },
    placar: "Corinthians x Internacional",
    time_mandante: {
      time_id: 65,
      nome_popular: "Corinthians",
      sigla: "COR",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34a68419f.svg",
    },
    time_visitante: {
      time_id: 44,
      nome_popular: "Internacional",
      sigla: "INT",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d349b92103.svg",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "agendado",
    slug: "corinthians-internacional-9361",
    data_realizacao: "02/12/2023",
    hora_realizacao: "18:00",
    data_realizacao_iso: "2023-12-02T18:00:00-0300",
    estadio: {
      estadio_id: 67,
      nome_popular: "Arena Corinthians",
    },
    _link: "/v1/partidas/9361",
  },
  {
    partida_id: 9363,
    campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
    },
    placar: "Atlético-MG x São Paulo",
    time_mandante: {
      time_id: 30,
      nome_popular: "Atlético-MG",
      sigla: "CAM",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d3494f3380.svg",
    },
    time_visitante: {
      time_id: 57,
      nome_popular: "São Paulo",
      sigla: "SAO",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34a23c311.svg",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "agendado",
    slug: "atletico-mg-sao-paulo-9363",
    data_realizacao: "02/12/2023",
    hora_realizacao: "21:00",
    data_realizacao_iso: "2023-12-02T21:00:00-0300",
    estadio: {
      estadio_id: 42,
      nome_popular: "Mineirão",
    },
    _link: "/v1/partidas/9363",
  },
  {
    partida_id: 9358,
    campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
    },
    placar: "Flamengo x Cuiabá",
    time_mandante: {
      time_id: 18,
      nome_popular: "Flamengo",
      sigla: "FLA",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d348e3f815.svg",
    },
    time_visitante: {
      time_id: 204,
      nome_popular: "Cuiabá",
      sigla: "CUI",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34ebcdafa.svg",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "agendado",
    slug: "flamengo-cuiaba-9358",
    data_realizacao: "03/12/2023",
    hora_realizacao: "16:00",
    data_realizacao_iso: "2023-12-03T16:00:00-0300",
    estadio: {
      estadio_id: 19,
      nome_popular: "Maracanã",
    },
    _link: "/v1/partidas/9358",
  },
  {
    partida_id: 9360,
    campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
    },
    placar: "Palmeiras x Fluminense",
    time_mandante: {
      time_id: 56,
      nome_popular: "Palmeiras",
      sigla: "PAL",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34a1cf247.svg",
    },
    time_visitante: {
      time_id: 26,
      nome_popular: "Fluminense",
      sigla: "FLU",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d3492a6e0b.svg",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "agendado",
    slug: "palmeiras-fluminense-9360",
    data_realizacao: "03/12/2023",
    hora_realizacao: "16:00",
    data_realizacao_iso: "2023-12-03T16:00:00-0300",
    estadio: {
      estadio_id: 327,
      nome_popular: "Allianz Parque",
    },
    _link: "/v1/partidas/9360",
  },
  {
    partida_id: 9359,
    campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
    },
    placar: "Botafogo x Cruzeiro",
    time_mandante: {
      time_id: 22,
      nome_popular: "Botafogo",
      sigla: "BOT",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d349052558.svg",
    },
    time_visitante: {
      time_id: 37,
      nome_popular: "Cruzeiro",
      sigla: "CRU",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34984830b.svg",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "agendado",
    slug: "botafogo-cruzeiro-9359",
    data_realizacao: "03/12/2023",
    hora_realizacao: "18:30",
    data_realizacao_iso: "2023-12-03T18:30:00-0300",
    estadio: {
      estadio_id: 26,
      nome_popular: "Nilton Santos (Engenhão)",
    },
    _link: "/v1/partidas/9359",
  },
  {
    partida_id: 9362,
    campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
    },
    placar: "Bragantino x Coritiba",
    time_mandante: {
      time_id: 64,
      nome_popular: "Bragantino",
      sigla: "BGT",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34a5db2ec.svg",
    },
    time_visitante: {
      time_id: 84,
      nome_popular: "Coritiba",
      sigla: "CFC",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34b1296c2.svg",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "agendado",
    slug: "bragantino-coritiba-9362",
    data_realizacao: "03/12/2023",
    hora_realizacao: "18:30",
    data_realizacao_iso: "2023-12-03T18:30:00-0300",
    estadio: {
      estadio_id: 73,
      nome_popular: "Nabi Abi Chedid",
    },
    _link: "/v1/partidas/9362",
  },
  {
    partida_id: 9364,
    campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
    },
    placar: "Grêmio x Vasco",
    time_mandante: {
      time_id: 45,
      nome_popular: "Grêmio",
      sigla: "GRE",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d349c32bf1.svg",
    },
    time_visitante: {
      time_id: 23,
      nome_popular: "Vasco",
      sigla: "VAS",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d3490f1e73.svg",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "agendado",
    slug: "gremio-vasco-9364",
    data_realizacao: "03/12/2023",
    hora_realizacao: "18:30",
    data_realizacao_iso: "2023-12-03T18:30:00-0300",
    estadio: {
      estadio_id: 54,
      nome_popular: "Arena do Grêmio",
    },
    _link: "/v1/partidas/9364",
  },
  {
    partida_id: 9365,
    campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
    },
    placar: "Athletico-PR x Santos",
    time_mandante: {
      time_id: 185,
      nome_popular: "Athletico-PR",
      sigla: "CAP",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34e1b8948.svg",
    },
    time_visitante: {
      time_id: 63,
      nome_popular: "Santos",
      sigla: "SAN",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34a5749d6.svg",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "agendado",
    slug: "athletico-pr-santos-9365",
    data_realizacao: "03/12/2023",
    hora_realizacao: "18:30",
    data_realizacao_iso: "2023-12-03T18:30:00-0300",
    estadio: {
      estadio_id: 824,
      nome_popular: "Ligga Arena",
    },
    _link: "/v1/partidas/9365",
  },
  {
    partida_id: 9366,
    campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
    },
    placar: "Fortaleza x Goiás",
    time_mandante: {
      time_id: 131,
      nome_popular: "Fortaleza",
      sigla: "FOR",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34c76d067.svg",
    },
    time_visitante: {
      time_id: 115,
      nome_popular: "Goiás",
      sigla: "GOI",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34c1c1d9f.svg",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "agendado",
    slug: "fortaleza-goias-9366",
    data_realizacao: "03/12/2023",
    hora_realizacao: "18:30",
    data_realizacao_iso: "2023-12-03T18:30:00-0300",
    estadio: {
      estadio_id: 112,
      nome_popular: "Castelão (CE)",
    },
    _link: "/v1/partidas/9366",
  },
  {
    partida_id: 9367,
    campeonato: {
      campeonato_id: 10,
      nome: "Campeonato Brasileiro",
      slug: "campeonato-brasileiro",
    },
    placar: "América-MG x Bahia",
    time_mandante: {
      time_id: 33,
      nome_popular: "América-MG",
      sigla: "AMG",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34966e9c6.svg",
    },
    time_visitante: {
      time_id: 68,
      nome_popular: "Bahia",
      sigla: "BAH",
      escudo: "https://cdn.api-futebol.com.br/escudos/638d34a8b6bd8.svg",
    },
    placar_mandante: null,
    placar_visitante: null,
    disputa_penalti: false,
    status: "agendado",
    slug: "america-mg-bahia-9367",
    data_realizacao: "03/12/2023",
    hora_realizacao: "18:30",
    data_realizacao_iso: "2023-12-03T18:30:00-0300",
    estadio: {
      estadio_id: 27,
      nome_popular: "Independência",
    },
    _link: "/v1/partidas/9367",
  },
];
