package config

import (
	"log"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Config struct {
	DB   PostgresConfig
	Port uint16
}

type PostgresConfig struct {
	Username string
	Password string
	URL      string
	Port     uint16
	Host     string
}

func LoadConfig() (*Config, error) {
	godotenv.Load()

	cfg := &Config{
		Port: GetEnvAsInt(os.Getenv("PORT")),

		DB: PostgresConfig{
			Username: os.Getenv("POSTGRES_USER"),
			Password: os.Getenv("POSTGRES_PASSWORD"),
			URL:      os.Getenv("POSTGRES_URL"),
			Port:     GetEnvAsInt(os.Getenv("POSTGRES_PORT")),
			Host:     os.Getenv("POSTGRES_HOST"),
		},
	}

	return cfg, nil
}

func GetEnvAsInt(key string) uint16 {
	val, err := strconv.Atoi(key)
	if err != nil {
		log.Fatal("Value not a valid integer string: " + err.Error())
	}
	return uint16(val)
}
