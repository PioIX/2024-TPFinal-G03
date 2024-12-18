﻿//Sección MySQL del código
const mySql = require("mysql2/promise");

/**
 * Objeto con la configuración de la base de datos MySQL a utilizar.
 */
const SQL_CONFIGURATION_DATA =
{
	host: "10.1.5.205", //IP privada del servidor del colegio
	// 10.1.5.205
	//host: "181.47.29.35", //IP pública del servidor del colegio
	user: "2024-5AINF-G03",
	password: "river912",
	database: "2024-5AINF-G03",
	port: 3306,
	charset: 'UTF8_GENERAL_CI'
}


exports.realizarQuery = async function (queryString)
{
	let returnObject;
	let connection;
	try
	{
		connection = await mySql.createConnection(SQL_CONFIGURATION_DATA);
		returnObject = await connection.execute(queryString);
	}
	catch(err)
	{
		console.log(err);
	}
	finally
	{
		if(connection && connection.end) connection.end();
	}
	return returnObject[0];
}