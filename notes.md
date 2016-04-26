# Server API End points

## `GET` - http://8cb7cf5b.ngrok.io/games-list

Sends back an object with game names and their amount of games available

## `POST` - http://8cb7cf5b.ngrok.io/add-game

Data Format

```json
{
  "games": [{
    "name": "Pandemic",
    "qty": "20"
  }]
}
```

## `POST` - http://8cb7cf5b.ngrok.io/checkout-game

```json
{
  "name": "Pandemic",
  "qty": "10"
}
```

This will remove 10 games from the list of Pandemic if possible
