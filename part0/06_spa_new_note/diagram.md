title SPA - New Note

note left of browser:
Browser does only one HTTP request.
content-type in the headers tells the
server that the included data is in
JSON format.
end note

browser -> server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

server --> browser: response with code 201 "Created"

note right of server:
This time server does not
ask for a redirect.
end note

note left of browser:
Browser stays on the same page,
and it sends no further HTTP requests.
