const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/events', async (req, res) => {
    const { type, data } = req.body;


    if (type === 'CommentCreated') {
        const status = data.content.includes('blood') ? 'rejected' : 'approved';

        console.log(data)

        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                content: data.content,
                postId: data.postId,
                status: status
            }
        })
    }

    res.send('dome');
});

app.listen(4003, () => {
    console.log('Moderation on 4003');
})