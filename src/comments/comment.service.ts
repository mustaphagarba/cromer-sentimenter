import { Component } from '@nestjs/common';

const Sentiment = require('sentiment');

@Component()
export class CommentService {
    addComment(data) {
        const Pusher = require('pusher');
        const Sentiment = new Sentiment();
        const SentimentScore = sentiment.analyze(data.comment).score;
        const payload - {
            message : data.comment,
            sentiment : SentimentScore,
        }
        var pusher = new Pusher({
            appId: '569020',
            key: '3de5a19b6327ee0d6fa3',
            secret: 'e298ae6544bd349ac10c',
            cluster: 'eu',
            encrypted: true
        });
        pusher.trigger('comments', 'new-comment', payload);
    }
}