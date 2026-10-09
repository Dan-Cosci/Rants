package main

import (
	"api/internal/app"
	"api/internal/config"
	"log"
)

func main() {
	cfg, err := config.LoadConfig()
	if err != nil {
		log.Fatal("Failed to load config")
	}

	server, err := app.App(cfg)
	if err != nil {
		log.Fatal("Failed to load config")
	}

	server.Run(":" + cfg.Port)

}
