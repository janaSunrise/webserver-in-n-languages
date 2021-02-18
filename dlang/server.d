#!/usr/bin/env dub

/+ dub.sdl:
dependency "vibe-d" version="~>0.8.0"
+/

void main()
{
    import vibe.d;

    listenHTTP(":8080", (req, res) {
        res.writeBody("Hello, World: " ~ req.path);
    });

    runApplication();
}