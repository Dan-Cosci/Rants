package app

import (
	"api/internal/config"

	"github.com/gin-gonic/gin"
)

func App(cfg *config.Config) (*gin.Engine, error) {
	r := gin.Default()
	print(cfg.DB.Username)

	return r, nil
}
