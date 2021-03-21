title 0.4 new_note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over server:
Server response with a code 302
and redirects to location: exampleapp/notes
end note

server --> browser: STATUS CODE 302 Found redirect /exampleapp/notes

note over browser:
Browser does a new HTTP GET request
to the location on the response header
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes

server --> browser: HTML-code

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css

server --> browser: main.css

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js

server --> browser: main.js

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json

server --> browser: data.json
