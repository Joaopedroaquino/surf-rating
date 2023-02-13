import { AxiosStatic } from "axios";

export interface StormGlassPointSource {
    [key: string]: number;


}
export interface StormGlassPoint {
    readonly time: string;
    readonly waveHeight: StormGlassPointSource;
    readonly waveDirection: StormGlassPointSource;
    readonly swellDirection: StormGlassPointSource;
    readonly swellHeight: StormGlassPointSource;
    readonly swellPeriod: StormGlassPointSource;
    readonly windDirection: StormGlassPointSource;
    readonly windSpeed: StormGlassPointSource;
}
export interface StormGlassForecastResponse {
    hours: StormGlassPoint[];

}

export interface ForecastPoint {
    time: string;
    waveHeight: number;
    waveDirection: number;
    swellDirection: number;
    swellHeight: number;
    swellPeriod: number;
    windDirection: number;
    windSpeed: number;


}

export class StormGlass {
    readonly stormGlassAPIparams =
        'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
    readonly stormGlassAPISourcxe = 'noaa';

    constructor(protected request: AxiosStatic) { }

    public async fetchPoints(lat: number, lng: number): Promise<{}> {
        const response = this.request.get<StormGlassForecastResponse>('');

    }

    private normalizeResponse(points: StormGlassForecastResponse): ForecastPoint[] {
    }
}