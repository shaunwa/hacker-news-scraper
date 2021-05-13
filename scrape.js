const axios = require('axios');
const { parse } = require('node-html-parser');

axios.get('https://news.ycombinator.com/').then(response => {
    const root = parse(response.data);

    const titleElements = root.querySelectorAll('.storylink');
    const scoreElements = root.querySelectorAll('.score');

    const titles = titleElements.map(e => e.text);
    const scores = scoreElements.map(e => Number(e.text.split(' ')[0]));

    const articlesInfo = titles.map((title, i) => ({ title, score: scores[i] }))

    console.log(articlesInfo);
});