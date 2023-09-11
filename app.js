const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
    const slackName = "Sammabbyl";
    const track = "backend";
    const currentDate = new Date().toLocaleDateString('en-US', {weekday: 'long' });
    const currentUtcTime = new Date().toISOString().split(".")[0] + "Z";
    const githubbFileUrl = 'https://github.com/Samuel3310/HNGx_internship/blob/main/app.js';
    const githubRepoUrl = 'https://github.com/Samuel3310/HNGx_internship';


    const response={
        slack_name: slackName,
        current_day: currentDate,
        utc_time: currentUtcTime,
        track: track,
        github_file_url: githubbFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: "200",
    };

    res.json(response);
})

app.listen(port, ()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});
