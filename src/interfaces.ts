export interface ISubway {
	ID: string
	Route_Id: string
	Linea: {
		Estaciones: [{
            stop_name: string
            arrival: {
                time: number
                delay: number
            }
            departure: {
                time: number
                delay: number
            }
        }]
	}
}
