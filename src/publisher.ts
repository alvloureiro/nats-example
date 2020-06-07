import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';

console.clear();

const stan = nats.connect('cluster-name', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', (err) => {
  console.log('Publisher connected to NATS');

  const data = JSON.stringify({
    id: '123',
    username: 'root',
    password: 'rootme',
  });

  stan.publish('auth-user:created', data, () => {
    console.log('Event published!');
  });
});
