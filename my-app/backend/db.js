import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "10.1.5.205", //IP privada del servidor del colegio
	//host: "186.18.137.196", //IP pública del servidor del colegio
	user: "2024-5INF-Examenes",
	password: "examenes",
	database: "2024-5INF-Examenes",
	port: 3306,
	charset: 'UTF8_GENERAL_CI'
})

export {pool}