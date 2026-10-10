build:
	go build -o bin/api ./cmd/api/main.go

run:
	go run ./cmd/api/main.go

clean:
	rm -rf bin/

release:
	GOOS=linux GOARCH=amd64 go build -o bin/api-linux-amd64 ./cmd/api/main.go
	GOOS=darwin GOARCH=arm64 go build -o bin/api-darwin-amd64 ./cmd/api/main.go
	GOOS=windows GOARCH=amd64 go build -o bin/api-windows-amd64.exe ./cmd/api/main.go
