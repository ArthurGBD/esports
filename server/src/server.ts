//const express = requeri('express');

import express, { response } from "express";

const app = express()

// HTTP methods / API restfull / HTTP Codes

/**
 * Query: ...
 * Route: ...
 * Body: ...
 */

app.get('/games', (request, response) => {
    return response.json([]);
});

app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});


app.get('/games/:id/ads', (request, response) => {
    const gameId = request.params.id;

    return response.send(gameId);
})

app.get('/ads/:id/discord', (request, response) => {
    const adId = request.params.id;

    return response.json([]);
})

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anuncio 1' },
        { id: 2, name: 'Anuncio 2' },
        { id: 3, name: 'Anuncio 3' },
        { id: 4, name: 'Anuncio 4' },
        { id: 5, name: 'Anuncio 5' },
        { id: 6, name: 'Anuncio 6888888888888' },
    ])
})

app.listen(3333)