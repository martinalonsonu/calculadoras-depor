import { LegendItem } from "./types/types";

//Permanent
const brand = "Depor";
const twitterAccount = "tuitdepor";    
const urlBrand = "https://depor.com";
const logo = 'logo-depor-white';
const urlPortadaEspeciales = "https://especiales.depor.com/especiales-multimedia-nndd/index.html";
const domainMarca = "https://especiales.depor.com/";
const domainAssets = "https://d1ts5g4ys243sh.cloudfront.net/proyectos_especiales_general/depor/prod/";
const urlCommonAssets = `${domainAssets}elementos-comunes/`;

//Variable
const titleEspecial = 'Calculadora Liga 1: ver tabla de posiciones y resultados de la Primera División del Fútbol Peruano 2024';
const slugEspecial = 'calculadora-liga-1-2024-tabla-de-posiciones-resultados-pronosticos-del-futbol-peruano-torneo-apertura-clausura';
const slugShields = 'calculadora-liga-1-torneo-clausura-2022-tabla-posiciones-acumulada-predicciones-futbol-peruano-resultados-multimedia-nndd';
const urlEspecial = `${domainMarca}${slugEspecial}/index.html`;
const urlAssets = `${domainAssets}${slugEspecial}`;
const urlShields = `${domainAssets}${slugShields}`;
const currentSeason = 'Clausura'; //Apertura o Clausura
const googleSheetKey = '1tzLgmpgiAILtvk3YSnf0e5Iii43tISTVBazSzX71rhE'; //A y C 2024 Pro
//const googleSheetKey = '1EfMMDFvfFjCPwdCwzgiANmu_uxixYlwsKBxt3t6pexg'; //A y C 2024 Dev
const query = 'SELECT A, B, C, D, E, F, G, H, I, J, K, L, M';
const qryParam = '?';
const qryMatchDay = 'fecha';
const isPlayed = 'SÍ';
const isCurrentMatchDay = 'SÍ';
const notPlayed = '-';
const epigraph = "Llena las casillas con tus predicciones y chequea si tu equipo está cerca de ser campeón o peleará el descenso";
const keyData = 'deporCalcLiga12024';
const staleTime = 60000;
const legendApertura: LegendItem[] = [
        {
        id: 1,
        description: "Ganador del Torneo Apertura clasifica a la final nacional siempre que se ubique entre los 8 primeros del Acumulado"
    }
]
const legendClausura: LegendItem[] = [
    {
    id: 1,
    description: "Ganador del Torneo Clausura clasifica a la final nacional siempre que se ubique entre los 8 primeros del Acumulado"
}
]
const legend: LegendItem[] = [
    //Apertura
    // {
    //     id: 1,
    //     description: "Ganador del Torneo Apertura clasifica a semifinal nacional"
    // }
    //Clausura
    {
        id: 1,
        description: "Juega los Play-off y clasifica a la fase de grupos de la Libertadores"
    },
    {
        id: 2,
        description: "Clasifica a la fase 2 de la Libertadores"
    },
    {
        id: 3,
        description: "Clasifica a la fase 1 de la Libertadores"
    },
    {
        id: 4,
        description: "Clasifica a la fase 1 de la Sudamericana"
    },
    {
        id: 5,
        description: "Desciende a la Liga 2"
    },
];
const aperturaId = 0;
const clausuraId = 1;
const accumulatedId = 2;
const sessionStorageKey = 'deporCalcLiga12024';
const urlBetButton = 'https://ad.doubleclick.net/ddm/trackclk/N244601.4724729DEPOR.COM/B30172824.369949875;dc_trk_aid=560527695;dc_trk_cid=194185734;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1';
const textBetButton = 'Juega aquí';

//ads
const caja3 = {
    id: 'div-gpt-ad-1582239025732-0',
    path: '/28253241/depor/web/post/default/caja3',
    size: ['fluid', [300, 100], [300, 50], [300, 250], [320, 100], [320, 50]]    
};
const lateralDerecho = {
    id: 'div-gpt-ad-1582159394135-0',
    path: '/28253241/depor/web/post/default/lateralr',
    size: [[160, 600], 'fluid', [120, 600]]    
};
const lateralIzquierdo = {
    id: 'div-gpt-ad-1582159368137-0',
    path: '/28253241/depor/web/post/default/laterall',
    size: [[120, 600], 'fluid', [160, 600]]    
};
const zocalo = {
    id: 'div-gpt-ad-1582159417206-0',
    path: '/28253241/depor/web/post/default/zocalo',
    size: [[728, 90], [320, 50]]    
};

export { 
    accumulatedId,
    aperturaId,
    brand,
    clausuraId,
    currentSeason,
    domainMarca, 
    domainAssets, 
    epigraph,
    googleSheetKey, 
    isCurrentMatchDay,
    isPlayed,
    keyData,
    legend,
    legendApertura,
    legendClausura,
    sessionStorageKey,
    logo,
    notPlayed,   
    query, 
    qryMatchDay,
    qryParam,   
    slugEspecial, 
    staleTime,
    textBetButton,
    titleEspecial, 
    twitterAccount, 
    urlAssets,     
    urlBetButton,
    urlShields,
    urlBrand, 
    urlCommonAssets, 
    urlEspecial, 
    urlPortadaEspeciales,     
    caja3,
    lateralDerecho,
    lateralIzquierdo,
    zocalo
}