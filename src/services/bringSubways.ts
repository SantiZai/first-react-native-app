import { ISubway } from './../interfaces'

const API = 'https://apitransporte.buenosaires.gob.ar/subtes/forecastGTFS?json=1&client_id=916ed83b713f4bc798b5de5c662a60b9&client_secret=75681421dD844431A88f65551aEB53CB'

export const bringSubways = async (): Promise<ISubway[]> => {
    const res = await fetch(API)
    const data = res.json()
    return data
}