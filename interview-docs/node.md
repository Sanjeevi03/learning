import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

// Route to serve HTML player
app.get('/', (req, res) => {
  res.send(`
    <h1>Video Streaming with Express</h1>
    <video width="640" height="360" controls>
      <source src="/video" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `);
});

// Route to stream the video
app.get('/video', (req, res) => {
  const videoPath = path.resolve('./videos/sample.mp4');
  const videoSize = fs.statSync(videoPath).size;
  const range = req.headers.range;

  if (!range) {
    return res.status(416).send('Range header required');
  }

  const [startStr, endStr] = range.replace(/bytes=/, '').split('-');
  const start = parseInt(startStr, 10);
  const end = endStr ? parseInt(endStr, 10) : videoSize - 1;
  const chunkSize = end - start + 1;

  const videoStream = fs.createReadStream(videoPath, { start, end });

  res.writeHead(206, {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': chunkSize,
    'Content-Type': 'video/mp4',
  });

  videoStream.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
