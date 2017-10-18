# memo
Don't forget

in emsdk-portable
```
$ embuilder.py build sdl2
```

in target directory
```
$ rustup target add wasm32-unknown-emscripten
$ export EMMAKEN_CFLAGS="-s USE_SDL=2"
```
