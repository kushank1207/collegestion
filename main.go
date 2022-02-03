package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"runtime/pprof"
)

//go:embed nextjs/dist
//go:embed nextjs/dist/_next
//go:embed nextjs/dist/_next/static/chunks/pages/*.js
//go:embed nextjs/dist/_next/static/*/*.js
var nextFS embed.FS

func main() {
	// Root at the `dist` folder generated by the Next.js app.
	distFS, err := fs.Sub(nextFS, "nextjs/dist")
	if err != nil {
		log.Fatal(err)
	}

	// The static Next.js app will be served under `/`.
	http.Handle("/", http.FileServer(http.FS(distFS)))
	// The API will be served under `/api`.
	http.HandleFunc("/api", handleAPI)

	// Start HTTP server at :8080.
	log.Println("Starting HTTP server at http://localhost:8080 ...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleAPI(w http.ResponseWriter, _ *http.Request) {
	// Gather memory allocations profile.
	profile := pprof.Lookup("allocs")

	// Write profile (human readable, via debug: 1) to HTTP response.
	err := profile.WriteTo(w, 1)
	if err != nil {
		log.Printf("Error: Failed to write allocs profile: %v", err)
	}
}
