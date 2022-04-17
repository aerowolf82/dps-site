// const fs = require("fs")
const express = require('express')
const morgan = require('morgan');
const app = express();
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
//var async  = require('express-async-await');
const fetch = require('node-fetch');
const asyncHandler = require('express-async-handler')
//import fetch from 'node-fetch';

const port = process.env.port || 3001;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



// async function fetchPokemon(pokemonName) {
//   let pokeres = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//   let pokedata = await pokeres.json();
//   //console.log(data)
//   return pokedata;
// }


// app.get('/api/pokemon', asyncHandler(async (req, res) =>{
//   knex.column('name').select().from('pokedata')
//     .then(data => {
//       res.status(200).json(data)
//     })
// }));


// app.get('/api/pokemon/:attribute', asyncHandler(async (req, res) =>{
//   let attribute = req.params.attribute;
//   attribute = attribute.toLowerCase();
//   let result = [];
//   knex.select('name',`${attribute}`).from('pokedata').orderBy(['name', { column: `${attribute}`, order: 'desc' }])
//     .then(data => {
//       res.status(200).json(data)
//     })
// }));



// app.get('/api/:pokemonName', asyncHandler(async (req, res) =>{
//   let pokemonName =req.params.pokemonName;
//   pokemonName = pokemonName.toLowerCase();
//   knex('pokedata')
//     .where('name', pokemonName)
//     .then(data => {
//       if(data.length <= 0){
//         fetchPokemon(pokemonName)
//         .then(apidata => {
//           if(apidata === undefined){
//             res.status(404).json({
//               message:
//                 'No Pokemon by that name'
//             })
//           }else{
//             knex('pokedata').insert([
//               {name: apidata?.name, type: apidata?.types[0]?.type?.name, dex_number: apidata?.id, hp: apidata?.stats[0].base_stat, attack: apidata?.stats[1].base_stat, defense: apidata?.stats[2].base_stat, special_attack: apidata?.stats[3].base_stat, special_defense:apidata?.stats[4].base_stat, speed:apidata?.stats[5].base_stat,img_link: apidata?.sprites?.other["official-artwork"]?.front_default }
//             ])
//             .then(() => {
//               knex('pokedata')
//                 .where('name', pokemonName)
//                 .then(data => {
//                   res.status(200).json(data)
//                 })
//             });
//           }
//         });
//       } else{
//         res.status(200).json(data)
//       }
//     })
// }));



// app.get('/api/:pokemonName/img', asyncHandler(async (req, res) =>{
//   let pokemonName =req.params.pokemonName;
//   pokemonName = pokemonName.toLowerCase();
//   let apidata;
//   knex('pokedata')
//     .where('name', pokemonName)
//     .then(data => {
//       if(data.length <= 0){
//         fetchPokemon(pokemonName)
//         .then(apidata => {
//           if(apidata === undefined){
//             res.status(404).json({
//               message:
//                 'No Pokemon by that name'
//             })
//           }else{
//             knex('pokedata').insert([
//               {name: apidata?.name, type: apidata?.types[0]?.type?.name, dex_number: apidata?.id, hp: apidata?.stats[0].base_stat, attack: apidata?.stats[1].base_stat, defense: apidata?.stats[2].base_stat, special_attack: apidata?.stats[3].base_stat, special_defense:apidata?.stats[4].base_stat, speed:apidata?.stats[5].base_stat,img_link: apidata?.sprites?.other["official-artwork"]?.front_default }
//             ])
//             .then(() => {
//               knex('pokedata')
//                 .where('name', pokemonName)
//                 .then(data => {
//                   res.status(200).json(data[0].img_link)
//               })
//             });

//           }
//         });
//       } else{
//         res.status(200).json(data[0].img_link)
//       }
//     })
// }));








app.listen(port, () => {
  console.log(`Pokedex Backend Listening on port: ${port}`);
});