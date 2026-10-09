package config

import (
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	DB   PostgresConfig
	Port string
}

type PostgresConfig struct {
	Username string
	Password string
	URL      string
	Port     string
}

func LoadConfig() (*Config, error) {
	godotenv.Load()

	cfg := &Config{
		Port: os.Getenv("PORT"),

		DB: PostgresConfig{
			Username: os.Getenv("POSTGRES_USER"),
			Password: os.Getenv("POSTGRES_PWD"),
			URL:      os.Getenv("POSTGRES_URL"),
			Port:     os.Getenv("POSTGRES_PORT"),
		},
	}

	return cfg, nil
}
