title 0.5 SPA

browser -> server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server --> browser: HTML-code
browser -> server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server --> browser: main.css
browser -> server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server --> browser: spa.js

note left of browser:
Browser run the code
in the spa.js file and
does HTTP GET request to
fetch the data
end note

server -> browser: data.json
