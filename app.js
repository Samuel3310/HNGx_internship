const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
    const slackName = req.query.slack_name;
    const track = req.query.track;
    const currentDate = new Date().toLocaleDateString('en-US', {weekday: 'long' });
    const currentUtcTime = new Date().toISOString();
    const githubbFileUrl = 'https://github.com/samuel3310';
    const githubRepoUrl = 'https://github.com/';


    const response={
        slackName: slackName,
        currentDate: currentDate,
        currentUtcTime: currentUtcTime,
        track: track,
        githubbFileUrl: githubbFileUrl,
        githubRepoUrl: githubRepoUrl,
        status_code: 200,
    };

    res.json(response);
})

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});