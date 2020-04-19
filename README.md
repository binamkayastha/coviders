This is based on these instructions to setup django
https://docs.docker.com/compose/django/

To start the webapp and the database

  `docker-compose up`

To stop it, ctrl+c, or:

  Use docker ps to get container id
  `docker ps`
  `docker stop <container_id>`
  To restart it
  `docker start <container_id>`
