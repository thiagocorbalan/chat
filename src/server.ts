import express from 'express';

const app = express().log()

app.listen(3000, () => "Running node in port a 3000");