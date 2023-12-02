
export interface Match {
    partida_id: number;
    placar: string;
    time_mandante: Team;
    time_visitante: Team;
    placar_mandante: number | null;
    placar_visitante: number | null;
    disputa_penalti: boolean;
    status: string;
    slug: string;
    data_realizacao: string;
    hora_realizacao: string;
    data_realizacao_iso: string;
    estadio: Stadium;
}

export interface Team {
    time_id: number,
    nome_popular: string,
    sigla: string,
    escudo: string
}

export interface Stadium {
    estadio_id: number,
    nome_popular: string
}
