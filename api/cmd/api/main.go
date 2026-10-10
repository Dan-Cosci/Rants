package main

import (
	"log"

	"github.com/Dan-Cosci/Rants/internal/app"
	"github.com/Dan-Cosci/Rants/internal/config"
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
