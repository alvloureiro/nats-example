# NATS Streaming Server Example

Simple example of how to use node-nats-straming library to connect and send events over the bus.

## How to run

Notice: that you should start the nats streaming server on your local machine. You can use docker and make use the official image from docker hub

#### Publisher

Simulate some service to publish an event

```sh
$ yarn publisher
```

- To simulate how to dispatch a event you can restart the publisher how many time you wish. Just type `rs` and press `Return`.

#### Listener

Simulate some service that subscribe to a channel

```sh
$ yarn listen
```
