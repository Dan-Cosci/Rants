package db

import (
	"database/sql"
	"log"

	"github.com/Dan-Cosci/Rants/internal/config"
	"github.com/lib/pq"
)

func ConnectDB(cfg *config.Config) *sql.DB {

	pg_cfg := pq.Config{
		Host:     cfg.DB.Host,
		Port:     cfg.DB.Port,
		User:     cfg.DB.Username,
		Password: cfg.DB.Password,
		SSLMode:  pq.SSLModeDisable,
	}

	log.Printf("DEBUG: user=%q password=%q db=%q host=%q port=% \n",
		cfg.DB.Username, cfg.DB.Password, cfg.DB.Host, cfg.DB.Port)

	c, err := pq.NewConnectorConfig(pg_cfg)
	if err != nil {
		log.Fatal("Error connection string is invalid: " + err.Error())
	}

	db := sql.OpenDB(c)

	if err := db.Ping(); err != nil {
		log.Fatal("Error connecting to database: " + err.Error())
	}

	return db

}
