import {  AxiosStatic } from "axios";

export class StormGlass {
    readonly stormGlassAPIparams = 
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
    readonly stormGlassAPISourcxe = 'noaa';
    constructor(protected request: AxiosStatic){}
    public async fetchPoints(lat: number, lng: number): Promise<{}>{
        return this.request.get('')

    }
}