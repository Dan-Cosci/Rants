package main

import (
	"log"
	"strconv"

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

	server.Run(":" + strconv.FormatUint(uint64(cfg.Port), 10))

}
